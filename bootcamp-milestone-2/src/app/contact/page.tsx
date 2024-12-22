import React from "react";
import style from "./contact.module.css";
import "../globals.css";
import ContactForm from "@/components/contactForm";

export default function Contact(){
    return(
        <>
        <main>
            <h1 className="mainTitle">Contact</h1>
            <h4 className={style.invite}>Send me a message!</h4>
            <ContactForm/>
        </main>
        </>
    );
}