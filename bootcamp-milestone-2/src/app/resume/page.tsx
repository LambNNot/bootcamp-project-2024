import React from "react";
import style from "./resume.module.css";
import Link from "next/link";
import classNames from "classnames";

export default function Resume(){
    return(
        <>
        <h1 className="main-title">Resume</h1>
        <a href="resume.pdf" download>Download Resume</a>
        <div className="resume">
            <section className="section">
                <h2 className="section-title">Education</h2>
                <div className="entry">
                    <h3 className="entry-title">Bachelor of Science in Computer Science</h3>
                    <p className="entry-info">
                        California Polytechnic State University, San Luis Obispo | Expected Graduation Date: June 2027
                    </p>
                </div>
            </section>
            <section className="section">
                <h2 className="section-title">Experience</h2>
                <div className="entry">
                    <h3 className="entry-title">Hack4Impact Software Developer</h3>
                    <p className="entry-info">
                        Hack4Impact | October 2023 - Present
                    </p>
                    <p className="entry-description">
                        - Completed the Hack4Impact Starter Pack<br/>
                        - Setting up Github
                    </p>
                </div>
            </section>
            <section className="section">
                <h2 className="section-title">Skills</h2>
                <ul className="skill-list">
                    <li>Python</li>
                    <li>HTML, CSS, & Git</li>
                    <li>Code.org</li>
                </ul>
            </section>
            <section className="section">
                <h2 className="section-title">Projects</h2>
                <div className="entry">
                    <h3 className="entry-title">DeMa Excerpt</h3>
                    <p className="entry-info">
                        Hack4Impact Starter Pack Deliverable
                    </p>
                    <p className="entry-description">
                        Sam Phan's Personal Website(?)
                    </p>
                    <h3 className="entry-title">Campfire Demo</h3>
                    <p className="entry-info">
                        <em>Campfire Demo</em> for AP-Computer Science Principles
                    </p>
                    <p className="entry-description">
                        It's a game :P
                    </p>
                </div>
            </section>
            <section className="section">
                <h2 className="section-title">Coursework</h2>
                <ul className="course-list">
                    <li>Hack4Impact HTML, CSS, & Git Starter Pack</li>
                    <li>Intro to Computer Science</li>
                    <li>AP-Computer Science Principles</li>
                </ul>
            </section>
            <section className="section">
                <h2 className="section-title">Activities</h2>
            </section>
            <section className="section">
                <h2 className="section-title">Awards</h2>
            </section>
            <section className="section">
                <h2 className="section-title">Interests</h2>
            </section>
            <section className="section">
                <h2 className="section-title">References</h2>
            </section>
        </div>
        </>
    );
}