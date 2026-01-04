import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function GET(){
    const {userId} = await auth();

    if(!userId){
        return new NextResponse("Unauthorized", {status: 401});
    }

    const user = await prisma.user.findUnique({
        where: {id: userId},
        select: {
            hasPaid: true,
            hasUsedFreeTrial: true
        }
    })

    return NextResponse.json(user);

}