import React from "react";
import style from "./blogs.module.css";
import "@/globals.css";
import BlogPreview from "@/components/blogPreview";
import connectDB from "@/../database/db";
import Blog from "@/../database/blogSchema";

async function getBlogs(){
    await connectDB();

    try{ // Query for all blogs and sort by date
        const blogs = await Blog.find().sort({date:-1}).orFail() // Send a response as the blogs as the message
        return blogs.map(blog =>({
            title : blog.title,
            date : blog.date,
            description : blog.description,
            image : blog.image,
            imageAlt : blog.imageAlt,
            slug : blog.slug,
            comments : blog.comments
        }))
    }catch(_err){
        return null
    }
}

export default async function Blogs(){
    const blogs = await getBlogs(); // Fetch data before rendering page
    if(!blogs) return <div>Error loading blogs</div>;

    return(
        <>
        <main>
            <h1 className="mainTitle">Blog</h1>
            <div className={style.blogsDiv} id="blogs-container">
                {blogs.map(blog =>(
                    <BlogPreview key={blog.slug} {...blog}/>
                ))}
            </div>
        </main>
        </>
    );
}