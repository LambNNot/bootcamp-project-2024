import React from "react";
import style from './navbar.module.css';
import Link from "next/link";
import classNames from "classnames";

export default function NavBar() {
  return (
    <header className={style.header}>
      <nav className={style.navbar}>
        <h1 className={classNames(style.logo, style.link)}>
            <Link href="/">DeMa Excerpt</Link>
        </h1>
        <ul className={style.navList}>
            <li className={style.navItem}><Link className={style.link} href="/">Home</Link></li>
            <li className={style.navItem}><Link className={style.link} href="/contact">Contact</Link></li>
            <li className={style.navItem}><Link className={style.link} href="/portfolio">Portfolio</Link></li>
            <li className={style.navItem}><Link className={style.link} href="/resume">Resume</Link></li>
            <li className={style.navItem}><Link className={style.link} href="/blogs">Blog</Link></li>
        </ul>
      </nav>
    </header>
  );
}