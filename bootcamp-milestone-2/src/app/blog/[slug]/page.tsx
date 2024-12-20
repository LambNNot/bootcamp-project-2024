import React from "react";
import "@/globals.css";
import style from "./blogPage.module.css";
import { parseAppSegmentConfig } from "next/dist/build/segment-config/app/app-segment-config";
import {Blog} from "@/../database/blogSchema";
import Comment from "@/components/comment";

type Props = {
    params: {slug:string}
}

async function getBlog(slug: string){
    try{
        const req = await fetch(`http://localhost:3000/api/Blogs/${slug}`, {
            cache: "no-store",
        });

        // Validate check GET request
        if(!req.ok){
            throw new Error("Failed to fetch blog");
        }

        return req.json();

    }catch(err:unknown){
        console.log(`error: ${err}`);
        return null;
    }
}

export default async function BlogPage({params}:Props){
    const {slug} = await params; // Need to await params before using properties :P

    const blog:Blog = await getBlog(slug);
    if(!blog){
        return(
            <>
            <main>
                <h1>ERROR 404: Blog Not Found</h1>
            </main>
            </>
        );
    }

    return(
        <>
        <main>
            <h1 className="mainTitle">{blog.title}</h1>
            <div className={style.blogContent}> 
                <p>Blog filler text...</p>
            </div>
            <div className={style.commentContainer}>
                <h4 className={style.commentsSectionTitle}><b>------- Comments -------</b></h4>
                {blog.comments.map((comment, index) =>(
                    <Comment key={index} comment={comment}/>
                ))}
            </div>
        </main>
        </>
    );
}