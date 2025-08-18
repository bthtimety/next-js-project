import styles from "./Header.module.css";
import {GitHub} from "@/components/GitHub/GitHub";
import React from "react";

export const Header = () => {
    return (
        <header className={styles.header}>
            <p className={styles.header__title}>.my_blog</p>
            <GitHub />
        </header>
    );
}
