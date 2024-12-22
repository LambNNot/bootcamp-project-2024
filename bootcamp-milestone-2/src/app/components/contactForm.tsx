"use client"
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "@/globals.css";
import style from "@/components/contactForm.module.css";

export default function ContactForm(){
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (event:React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();

        if(form.current == null){
            console.error("Form ref null");
            return;
        }

        emailjs.sendForm(
            "service_43usvga", // Service ID
            "template_kpuja7f", // Template ID
            form.current, // Form
            "_Fc2Th3LQBHyb13np", //Public Key
        ).then(
            (result) => {
                console.log("Success: ", result.text);
                alert("Message sent!");
            },(error) => {
                console.error("Error: ", error.text);
                alert("Message could not be sent.");
            }
        );

        form.current.reset(); // Reset form fields
    }
    return(
        <>
        <form className={style.form} ref={form} onSubmit={sendEmail}> {/*Set up eventHandler*/}
            <input className={style.field} type="text" name="user_name" placeholder="Your Name" required />
            <input className={style.field} type="email" name="user_email" placeholder="Your Email" required />
            <textarea className={style.field} name="message" placeholder="Your Message" required />
            <button type="submit">Send Message</button>
        </form>
        </>
    )
}