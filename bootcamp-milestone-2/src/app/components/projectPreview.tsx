import React from "react";
import style from "./projectPreview.module.css";
import {Project} from "@/../database/projectSchema";
import Image from "next/image";
import Link from "next/link";

export default function ProjectPreview(props: Project){
    return(
        <div className={style.project}>
            <h3 className={style.projectName}>{props.name}</h3>
            <div className={style.imgWrapper}>
                <Image src={props.image} alt={props.imageAlt} width={500} height={100}/> 
            </div>
            <p className={style.projectDesc}>{props.description}</p>
            <Link className = {style.projectLink} href={`/portfolio/projects/${props.slug}`}>Learn More</Link>
        </div>
    );
}