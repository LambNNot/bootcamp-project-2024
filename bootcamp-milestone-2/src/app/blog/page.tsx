import React from "react";
import style from "./blogs.module.css";
import Link from "next/link";
import classNames from "classnames";

import blogs from "@/static/blogData";


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