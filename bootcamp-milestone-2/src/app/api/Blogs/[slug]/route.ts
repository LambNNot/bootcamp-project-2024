import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/../database/db";
import blogSchema from "@/../database/blogSchema";

type IParams = {
    params : {
        slug:string
    }
}

export async function GET(req: NextRequest, {params}:IParams){
    await connectDB()
    const {slug} = params // Desstructure

    try{
        const blog = await blogSchema.findOne({slug}).orFail()
        return NextResponse.json(blog)
    }catch(err){
        return NextResponse.json('Blog Not Found.', {status: 404})
    }
}