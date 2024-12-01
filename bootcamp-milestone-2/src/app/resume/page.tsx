import React from "react";
import style from "./resume.module.css";
import "../globals.css";
import Link from "next/link";
import classNames from "classnames";

export default function Resume(){
    return(
        <>
        <main>
        <h1 className="mainTitle">Resume</h1>
        <a className={style.resumeLink} href="/Sam Phan Resume_11_25_24.pdf" download>Download Resume</a>
        <div className={style.resume}>
            <section className={style.resumeSection}>
                <h2 className={style.resumeSectionTitle}>Education</h2>
                <div className={style.resumeEntry}>
                    <h3 className={style.resumeEntryTitle}>Bachelor of Science in Computer Science</h3>
                    <p className={style.resumeEntryInfo}>
                        California Polytechnic State University, San Luis Obispo | Expected Graduation Date: June 2027
                    </p>
                </div>
            </section>
            <section className={style.resumeSection}>
                <h2 className={style.resumeSectionTitle}>Experience</h2>
                <div className={style.resumeEntry}>
                    <h3 className={style.resumeEntryTitle}>Hack4Impact Software Developer</h3>
                    <p className={style.resumeEntryInfo}>
                        Hack4Impact | October 2023 - Present
                    </p>
                    <p className={style.resumeEntryDescription}>
                        - Completed the Hack4Impact Starter Pack<br/>
                        - Setting up Github
                    </p>
                </div>
            </section>
            <section className={style.resumeSection}>
                <h2 className={style.resumeSectionTitle}>Skills</h2>
                <ul className={style.skillsList}>
                    <li>Python</li>
                    <li>HTML, CSS, & Git</li>
                    <li>Code.org</li>
                </ul>
            </section>
            <section className={style.resumeSection}>
                <h2 className={style.resumeSectionTitle}>Projects</h2>
                <div className={style.resumeEntry}>
                    <h3 className={style.resumeEntryTitle}>DeMa Excerpt</h3>
                    <p className={style.resumeEntryInfo}>
                        Hack4Impact Starter Pack Deliverable
                    </p>
                    <p className={style.resumeEntryDescription}>
                        Sam Phan's Personal Website(?)
                    </p>
                    <h3 className={style.resumeEntryTitle}>Campfire Demo</h3>
                    <p className={style.resumeEntryInfo}>
                        <em>Campfire Demo</em> for AP-Computer Science Principles
                    </p>
                    <p className={style.resumeEntryDescription}>
                        It's a game :P
                    </p>
                </div>
            </section>
            <section className={style.resumeSection}>
                <h2 className={style.resumeSectionTitle}>Coursework</h2>
                <ul className={style.coursesList}>
                    <li>Hack4Impact HTML, CSS, & Git Starter Pack</li>
                    <li>Intro to Computer Science</li>
                    <li>AP-Computer Science Principles</li>
                </ul>
            </section>
            <section className={style.resumeSection}>
                <h2 className={style.resumeSectionTitle}>Activities</h2>
            </section>
            <section className={style.resumeSection}>
                <h2 className={style.resumeSectionTitle}>Awards</h2>
            </section>
            <section className={style.resumeSection}>
                <h2 className={style.resumeSectionTitle}>Interests</h2>
            </section>
            <section className={style.resumeSection}>
                <h2 className={style.resumeSectionTitle}>References</h2>
            </section>
        </div>
        </main>
        </>
    );
}