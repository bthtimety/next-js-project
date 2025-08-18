"use client";

import React, {useContext} from "react";
import {GithubContext} from "@/contexts/GitHub.context";
import styles from "./Github.module.css";
import Image from "next/image";
import Link from "next/link";
import GitHubIcon from "@/public/icons/github.svg";

export const GitHub = () => {
    const { link } = useContext(GithubContext) || {};
    return link ? (
        <div className={styles.github}>
            <Link href="https://github.com/bthtimety">
                <Image src={GitHubIcon} alt="GitHub"/>
            </Link>
        </div>
    ) : null;
}