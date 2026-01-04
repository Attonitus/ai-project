import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(req: Request, {params}: {params: Promise<{id: string}>}){

    const {id} = await params;

    const transcript = await req.json();

    await prisma.interview.update({
        where: {id},
        data: {
            completedAt: new Date(),
            transcript: transcript || []
        }
    })

    return NextResponse.json({message: "Interview completed succesfully!"})

}