import React from "react";
import { LikeProps } from "./Like.props";
import styles from "./Like.module.css";
import LikeIcon from "./like.svg";
import Image from "next/image";

export const Like = ({ children }: LikeProps): React.ReactElement => {
    return (
        <div className={styles.like}>
            <span className={styles.like__num}>{children}</span>
            <Image src={LikeIcon} alt="like"/>
        </div>
    );
};