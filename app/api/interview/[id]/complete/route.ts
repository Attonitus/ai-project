import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {

    const { id } = await params;

    const transcript = await req.json();
    const user = await currentUser();


    if (!user) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    await prisma.interview.update({
        where: { id },
        data: {
            completedAt: new Date(),
            transcript: transcript || []
        }
    })

    await prisma.user.update({
        where: { userId: user.id },
        data: { hasUsedFreeTrial: true }
    })

    return NextResponse.json({ message: "Interview completed succesfully!" })

}