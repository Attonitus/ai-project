import prisma from "@/lib/prisma";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";


const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET!);

export async function POST(req: Request) {

    const body = await req.text();
    const headerList = await headers();
    const signature = headerList.get("stripe-signature") as string;

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.NEXT_PUBLIC_STRIPE_WEBHOOK_SEC!
        )
    } catch (error) {
        console.log("Stripe webhook error", error);
        return new NextResponse("Error processing webhook", { status: 500 });
    }

    switch (event.type) {
        case "checkout.session.completed":
            const session = event.data.object as Stripe.Checkout.Session;
            const userId = session.metadata?.userId;

            if (!userId) return new NextResponse("Unauthorized", { status: 401 });
            const chargeId = session.payment_intent as string || 'pi_placeholder_' + Date.now();

            await prisma.payment.create({
                data: {
                    user: {
                        connect: { userId }
                    },
                    amount: 1,
                    stripeChargeId: chargeId
                }
            })

            await prisma.user.update({
                where: { userId },
                data: {
                    hasPaid: true,
                    paidAt: new Date(),
                    stripeSubscriptionId: session.subscription as string,
                }
            })
            break;

        case "customer.subscription.updated":
            const subscription = event.data.object as Stripe.Subscription;
            const subId = subscription.id;

            await prisma.user.updateMany({
                where: { stripeSubscriptionId: subId },
                data: { hasPaid: true },
            });
            console.log("✅ Subscription:", subId);
            break;

        case "invoice.payment_succeeded":
            const invoice = event.data.object as Stripe.Invoice;
            const id = invoice.id; // Stripe.Invoice.subscription es string | null

            if (id) {
                await prisma.user.updateMany({
                    where: { stripeSubscriptionId: id },
                    data: {
                        hasPaid: true,
                    },
                });
                console.log("✅ Invoice paid, sub:", id);
            }
            break;

        case "customer.subscription.deleted":
            const deletedSub = event.data.object as Stripe.Subscription;
            await prisma.user.updateMany({
                where: { stripeSubscriptionId: deletedSub.id },
                data: { hasPaid: false },
            });
            break;
        case 'payment_intent.succeeded':
            const paymentIntent = event.data.object;
            console.log('PaymentIntent was successful!');
            break;
        case 'payment_method.attached':
            const paymentMethod = event.data.object;
            console.log('PaymentMethod was attached to a Customer!');
            break;
        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    return NextResponse.json({ received: true });

}