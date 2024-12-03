import React from "react";
import style from "../../blogs.module.css";
import Image from "next/image";

export default function FirstBlog(){
    return(
        <main>
            <p className={style.publicationDate}>Published: 11/27/2024</p>
            <Image src="/pk_ball.png" alt="Placeholder" width={500} height={500}/>
            <p>Bad content example :P</p>

        </main>
    );
}