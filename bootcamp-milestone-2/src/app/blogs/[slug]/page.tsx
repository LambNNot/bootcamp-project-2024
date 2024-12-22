import React from "react";
import "@/globals.css";
import style from "./blogPage.module.css";
import { Blog } from "@/../database/blogSchema";
import CommentSection from "@/components/commentSection";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getBlog(slug: string) {
  try {
    const req = await fetch(`https://h4i-bootcamp-2024.vercel.app/api/blogs/${slug}`, {
      cache: "no-store",
    });

    // Validate check GET request
    if (!req.ok) {
      throw new Error("Failed to fetch blog");
    }

    return req.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params; // Need to await params before using properties :P

  const blog: Blog = await getBlog(slug);
  if (!blog) {
    return (
      <>
        <main>
          <h1>ERROR 404: Blog Not Found</h1>
        </main>
      </>
    );
  }

  return (
    <>
      <main>
        <h1 className="mainTitle">{blog.title}</h1>
        <div className={style.blogContent}>
          <p>Blog filler text...</p>
        </div>
        <CommentSection collection="blogs" slug={blog.slug} />
      </main>
    </>
  );
}
