import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(){
    const {userId} = await auth();

    if(!userId){
        return new NextResponse("Unauthorized", {status: 401});
    }

    const interviews = await prisma.interview.findMany({
        where: {userId},
        orderBy: {
            createdAt: "desc"
        }
    })

    return NextResponse.json(interviews);
}