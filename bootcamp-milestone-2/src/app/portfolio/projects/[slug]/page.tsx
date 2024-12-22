import React from "react";
import "@/globals.css";
import style from "./projectPage.module.css";
import { Project } from "@/../database/projectSchema";
import CommentSection from "@/components/commentSection";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getProject(slug: string) {
  try {
    const req = await fetch(`https://h4i-bootcamp-2024.vercel.app/api/projects/${slug}`, {
      cache: "no-store",
    });

    // Validate check GET request
    if (!req.ok) {
      throw new Error("Failed to fetch project");
    }

    return req.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params; // Need to await params before using properties :P

  const project: Project = await getProject(slug);
  if (!project) {
    return (
      <>
        <main>
          <h1>ERROR 404: Project Not Found</h1>
        </main>
      </>
    );
  }

  return (
    <>
      <main>
        <h1 className="mainTitle">{project.name}</h1>
        <div className={style.projectContent}>
          <p>Project filler text...</p>
        </div>
        <CommentSection collection="projects" slug={project.slug} />
      </main>
    </>
  );
}
