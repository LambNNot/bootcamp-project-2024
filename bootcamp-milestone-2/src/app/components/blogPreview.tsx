  import React from 'react';
  import style from './blogPreview.module.css';
  import {Blog} from "@/static/blogData"
  import Image from "next/image";
  import Link from "next/link";

  export default function BlogPreview(props: Blog) {
    return (
    <div className={style.blogPost}>
          <Link className = {style.blogLink} href={`/blog/blogs/${props.slug}`}>
          <h3 className={style.blogTitle}>{props.title}</h3>
          <div className={style.imgWrapper}>
            <Image src={props.image} alt={props.imageAlt} width={50} height={50}/>
          </div>
          <p>{props.description}</p>
          <p className={style.pubDate}><em>Published: {props.date}</em></p>
          </Link>
      </div>
    );
  }