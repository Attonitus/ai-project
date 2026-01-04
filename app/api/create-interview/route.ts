import { Interview } from "@/lib/generated/prisma/client";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request){

    const {userId} = await auth();

    try {
        if(!userId){
            return new NextResponse("Unauthorized", {status: 401});
        }

        let user = await prisma.user.findUnique({where: {id: userId}});

        if(!user){
            user = await prisma.user.create({
                data: {
                    id: userId
                }
            })
        }

        const {name, rol, level} = await req.json() as Interview;

        const interview = await prisma.interview.create({
            data: {
                userId,
                name,
                level,
                rol
            }
        })

        return NextResponse.json(interview);
        
    } catch (error) {
        console.log("[INTERVIEW] ", error);
        return new NextResponse("Internal Error", {status: 500})
    }


}