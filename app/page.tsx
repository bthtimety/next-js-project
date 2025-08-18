import React from "react";
import styles from "./page.module.css";
import {Metadata} from "next";
import { Card } from "@/components";
import { getPosts } from "@/api/posts";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Главная страница",
        description: "Главная страница блога",
        keywords: "Блог, программирование, front-end, главная, статьи"
    };
}

export default async function Home() {
    const posts = await getPosts();
    return (
        <main className={styles.main}>
            {posts.map((post, index) => (
                <React.Fragment key={index}>
                    <Card
                        title={post.title}
                        description={post.body}
                        tags={["Front-end"]}
                        date="1 месяц назад"
                        timer="3 минуты"
                        likes_counter={4}
                        like_id={post.userId}
                        href="#"
                    ></Card>
                </React.Fragment>
            ))}
        </main>
    );
}
