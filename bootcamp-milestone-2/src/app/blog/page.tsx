import React from "react";
import style from "./blogs.module.css";
import {Blog} from "@/static/blogData";
import blogs from "@/static/blogData";
import BlogPreview from "@/components/blogPreview";

export default function Blogs(){
    return(
        <>
        <main>
            <h1 className={style.mainTitle}>Blog</h1>
            <div className={style.blogsDiv} id="blogs-container">
                {blogs.map(blog =>(
                    <BlogPreview key={blog.slug} {...blog}/>
                ))}
            </div>
        </main>
        </>
    );
}