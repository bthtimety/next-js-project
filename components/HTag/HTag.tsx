import React from "react";
import {HTagProps} from "./HTag.props";
import styles from "./HTag.module.css";

export const HTag = ({
                         tag,
                         children,
                         ...props
                     }: HTagProps): React.ReactElement => {
    switch (tag) {
        case "h1":
            return (
                <h1 className={styles.h1} {...props}>
                    {children}
                </h1>
            );
        case "h2":
            return (
                <h2 className={styles.h2} {...props}>
                    {children}
                </h2>
            );
        case "h3":
            return (
                <h3 className={styles.h3} {...props}>
                    {children}
                </h3>
            );
        default:
            return <></>;
    }
};