import React from "react";
import type {Metadata} from "next";
import {Open_Sans} from "next/font/google";
import "./globals.css";
import {Header} from "@/components/Header/Header"
import {GitHubProvider} from "@/contexts/GitHub.context";
import {BASE_GIT} from "@/constants";

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
        icon: "/favicon.ico"
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
                <GitHubProvider link={BASE_GIT}>
                    <Header />
                </GitHubProvider>
                {children}
            </body>
        </html>
    );
}
