import React from "react";
import { CommentProps } from "./Comment.props";
import styles from "./Comment.module.css";

export const Comment = ({
                            comment,
                            ...props
                        }: CommentProps): React.ReactElement => {
    return (
        <div className={styles.comment} {...props}>
            <div className={styles.comment__head}>
                <p className={styles.comment__name}>{comment.name}</p>
                <span>·</span>
                <p className={styles.comment__email}>{comment.email}</p>
            </div>
            <div className={styles.comment__body}>
                <p>{comment.body}</p>
            </div>
        </div>
    );
};