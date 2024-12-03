import React from "react";
import style from "./contact.module.css";
import "../globals.css";

export default function Contact(){
    return(
        <>
        <main>
            <h1 className="mainTitle">Contact</h1>
            <form className={style.contactForm}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required/>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required/>
                <label htmlFor="message">Message</label>
                <textarea required>

                </textarea>
                <input className={style.contactButton} type="submit" id="submit-button"/>
            </form>
        </main>
        </>
    );
}