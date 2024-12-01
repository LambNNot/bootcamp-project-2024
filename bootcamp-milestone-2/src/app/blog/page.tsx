import React from "react";
import style from "./blogs.module.css";
import blogs from "@/static/blogData";
import BlogPreview from "@/components/blogPreview";

/*{blogs.map(blog =>
    <BlogPreview/>
)}*/

export default function Blogs(){
    return(
        <>
        <main>
            <h1 className={style.mainTitle}>Blog</h1>
            <div className={style.blogsDiv} id="blogs-container"></div>
        </main>
        </>
    );
}