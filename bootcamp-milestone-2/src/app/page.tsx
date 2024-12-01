// You can name the function within page.tsx anything you want.
import React from "react";
import style from "./page.module.css";
import Link from "next/link";
import classNames from "classnames";

export default function Home() {
  return (
		<div>
		<main>
            <h1 className={style.mainTitle}>Hello, World!</h1>
            <img className={style.img} id="logo-pic" src="LambNNot_Logo.png" alt="LambNNot Logo"/>
            <div className={style.abtMe}>
                <p className={style.abtMeTitle}>
                    Meet the Machine
                </p>
				<div className={style.abtMeImgContainer}>
					<img className={style.abtMeImg} src="the_machine.png" alt="The Machine"/>
				</div>
                <div className={style.abtMeText}>
                    <p>I am <strong>Sam Phan</strong> and I am a <em>second-year Computer Science</em> major at <strong>Cal Poly</strong>. 
                        I grew up in <em>San Diego, CA</em> but was actually born in Los Angeles, CA.
                    </p>
                    <p>
                        I am looking forward to working with/for <strong>Hack4Impact</strong>!
                    </p>
                </div>
            </div>
        </main>
		</div>
		);
}