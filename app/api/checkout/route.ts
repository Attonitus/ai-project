import { currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';


const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET!);


export async function POST(){
    try {
        const user = await currentUser();

        if(!user) return new NextResponse("Unauthorized", {status: 401});

        const session = await stripe.checkout.sessions.create({
            ui_mode: "embedded",
            mode: "subscription",
            payment_method_types: ["card"],
            line_items: [
                {
                    price: "price_1SljITIFBqEhqoTVu4WB1EaR",
                    quantity: 1
                }
            ],
            return_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard`,
            customer_email: user.emailAddresses[0].emailAddress,
            metadata: {
                userId: user.id || ""
            }
        })

        return NextResponse.json({
            clientSecret: session.client_secret
        })

    } catch (error) {
        console.log("STRIPE SESSION ERROR", error);
        return new NextResponse("Internal Server error", {status: 500})
    }
}