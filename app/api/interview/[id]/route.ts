import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const { userId } = await auth();

    const {id} = await params;

    try {
        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }
    
        const interview = await prisma.interview.findUnique({
            where: { id },
        })
    
        if(!interview){
            return NextResponse.json("Interview not found!");
        }
    
        return NextResponse.json(interview);
    
    } catch (error) {
        console.log("INTERVIEW ID GET ", error);
        return new NextResponse("Error getting interview", {status: 500})
    }

}