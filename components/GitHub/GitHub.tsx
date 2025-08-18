"use client";

import React, { useContext } from "react";
import { GithubContext } from "@/contexts/GitHub.context";
import styles from "./Github.module.css";
import Image from "next/image";
import GitHubIcon from "@/public/icon/github.svg";

export function GitHub() {
    const { link } = useContext(GithubContext) || {};
    return link ? (
        <div className={styles.github}>
            <a href="https://github.com/bthtimety" target="_blank" rel="noopener noreferrer">
                <Image src={GitHubIcon} alt="GitHub"/>
            </a>
        </div>
    ) : null;
}