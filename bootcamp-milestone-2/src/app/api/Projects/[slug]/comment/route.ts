import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/../database/db";
import projectSchema from "@/../database/projectSchema"
import {IComment} from "@/../database/comment";

type IParams = {
    params: Promise<{
        slug: string;
    }>
}

export async function POST(req:NextRequest, {params}:IParams){
    await connectDB();

    const {slug} = await params; // Get slug
    const body:IComment = await req.json();

    if (!body.user) {
		return NextResponse.json('Comment has no valid user', {status:400});
	}else if(!body.comment){
        return NextResponse.json('Invalid comment', {status:400});
    }

    try{
        const project = await projectSchema.findOneAndUpdate(
            {slug}, // Filter
            {$push:{ 
                // Push new comment
                comments:{
                    user: body.user,    
                    comment: body.comment,
                    time: body.time
                }
            }},
            {new:true, runValidators:true}
        ).orFail();
        return NextResponse.json(project);
    }catch{
        return NextResponse.json('Project not found.', {status : 404});
    }
}