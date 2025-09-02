import React from "react";
import {PProps} from "./P.props";
import styles from "./P.module.css";
import cn from "classnames";

export const P = ({size = "m", children, className, ...props}: PProps): React.ReactElement => {
    return (
        <p className={cn(styles.p, styles[size], className)} {...props}>
            {children}
        </p>
    );
};