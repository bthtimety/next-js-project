import {getPost} from "@/api/post";
import {Metadata} from "next";
import React from "react";
import Image from "next/image";
import {Like} from "@/components";
import styles from "./page.module.css";
import parse from "html-react-parser";

type postByIdProps = Promise<{ id: string }>;

export async function generateMetadata({params}: { params: postByIdProps; }): Promise<Metadata> {
    const { id } = await params;
    const post = await getPost(id);

    return {
        title: post.title,
        description: post.body
    };
}

export default async function DetailPost({params}: { params: postByIdProps; }) {
    const { id } = await params;
    const post = await getPost(id);
    return (
        <div className={styles.post}>
            <div className={styles.content}>
                <h1 className={styles.post__title}>{post.title}</h1>
                <div className={styles.post__header}>
                    <span>Front-end</span>
                    <span>·</span>
                    <span>1 месяц назад</span>
                    <span>·</span>
                    <span>3 минуты</span>
                    <span className={styles.post__likes}>
                        4 <Like id={id} isButton={false} />
                    </span>
                </div>
                <Image
                    className={styles.image}
                    src={"/assets/CardCover.png"}
                    alt={post.title}
                    width={687}
                    height={386}
                />
                <div className={styles.post__text}>{parse(post.body)}</div>
                <div className={styles.like}>
                    <span>Понравилось? Жми</span>
                    <Like isButton={true} id={id} />
                </div>
            </div>
        </div>
    );
}