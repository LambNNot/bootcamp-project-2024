import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/../database/db";
import blogSchema from "@/../database/blogSchema";
import {IComment} from "@/../database/comment";

type IParams = {
    params: {
        slug:String;
    }
}


export async function POST(req: NextRequest, {params}:IParams) {
    await connectDB(); // Connect to database

    const {slug} = await params; // Get slug from parameters
	const body:IComment = await req.json();
    
	// validate body
	if (!body.user) {
		return NextResponse.json('Comment has no valid user', {status:400});
	}else if(!body.comment){
        return NextResponse.json('Invalid comment', {status:400});
    }
	
	// push comment object to document
	try{
        const blog = await blogSchema.findOneAndUpdate(
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
        return NextResponse.json(blog);
    }catch(err){
        return NextResponse.json('Blog not found.', {status : 404});
    }
}