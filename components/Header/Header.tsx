import styles from "./Header.module.css";
import {GitHub} from "@/components/GitHub/GitHub";
import React from "react";
import Link from "next/link";

export const Header = () => {
    return (
        <header className={styles.header}>
            <p className={styles.header__title}>
                <Link className={styles.header__link} href="/">.my_blog</Link>
            </p>
            <GitHub />
        </header>
    );
}
