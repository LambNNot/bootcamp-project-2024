import React from "react";
import style from "./portfolio.module.css";
import "../globals.css";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio(){
    return(
        <>
        <main>
            <h1 className="mainTitle">Portfolio</h1>
            <div className={style.project}>
                <Link href="/">
                    <Image src="/LambNNot_Logo.png" alt="LambNNot Logo" width={500} height={500}/>
                    <p>DeMa Excerpt</p>
                </Link>
                <div className={style.projectDetails}>
                    <p className={style.projectName}>
                        DeMa Excerpt
                    </p>
                    <p className={style.projectDescription}>
                        Sam Phan's Personal Project for Hack4Impact! :D
                    </p>
                    <Link href="/">Learn More</Link>
                </div>
            </div>
        </main>
        </>
    );
}