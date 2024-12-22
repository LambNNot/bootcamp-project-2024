import React from "react";
import style from "./portfolio.module.css";
import "../globals.css";
import connectDB  from "../../database/db";
import Project from "../../database/projectSchema";
import ProjectPreview from "@/components/projectPreview";

async function getProjects(){
    await connectDB();

    try{ // Query for all projects
        const projects = await Project.find().orFail() // Send a response as the projects as the message
        return projects.map(project =>({
            name : project.name,
            description : project.description,
            image : project.image,
            imageAlt : project.imageAlt,
            slug : project.slug,
            comments : project.comments
        }))
    }catch{
        return null
    }
}

export default async function Portfolio(){
    const projects = await getProjects(); // Fetch data before rendering page
    if(!projects) return <div>Error loading projects</div>;

    return(
        <>
        <main>
            <h1 className="mainTitle">Portfolio</h1>
            <div className={style.projectsDiv} id="projects-container">
                {projects.map(project =>(
                    <ProjectPreview key={project.name} {...project}/>
                ))}
            </div>
        </main>
        </>
    );
}