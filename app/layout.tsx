import React from "react";
import Image from "next/image";
import type {Metadata} from "next";
import {Open_Sans} from "next/font/google";
import "./globals.css";
import styles from "./header.module.css";
import GitHubIcon from "../public/icon/github.svg";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin", "cyrillic"]
});

export const metadata: Metadata = {
    title: "Мой блог",
    description: "Добро пожаловать в мой блог!",
    keywords: "Блог, программирование, front-end, главная, статьи",
    openGraph: {
        title: "my_blog",
        description: "Добро пожаловать в мой блог!",
        locale: "ru_RU",
        type: "website"
    },
    icons: {
        icon: "../favicon.ico"
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body className={`${openSans.variable}`}>
                <header className={styles.header}>
                    <p className={styles.header__title}>.my_blog</p>
                    <div className={styles.header__github}>
                        <a href="https://github.com/bthtimety" target="_blank" rel="noopener noreferrer">
                            <Image
                                src={GitHubIcon}
                                alt="GitHub"
                            />
                        </a>
                    </div>
                </header>
                {children}
            </body>
        </html>
    );
}
