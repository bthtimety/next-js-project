"use client";

import React, {useState} from "react";
import {LikeProps} from "./Like.props";
import styles from "./Like.module.css";
import LikeIcon from "./like.svg";
import Image from "next/image";
import cn from "classnames";

export const Like = ({id, isButton, ...props}: LikeProps): React.ReactElement => {
    const [isLiked, setLiked] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const patchLike = async () => {
        const url = "https://jsonplaceholder.typicode.com/posts/";
        setLoading(true);
        try {
            const newState = !isLiked;
            const res = await fetch(url+"/post/"+id, {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify({
                    newState
                })
            });
            const json = await res.json();
            const status = json.newState;
            setLiked(status);
        } catch (error) {
            console.error(`Something went wrong: ${error}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            {...props}
            className={cn(styles.like, {
                [styles.like__button]: isButton,
                [styles.is__liked]: isLiked,
                [styles.loading]: loading,
            })}
            disabled={loading}
            onClick={patchLike}
        >
            <Image src={LikeIcon} alt="like"/>
        </button>
    );
};
