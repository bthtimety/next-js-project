import React from "react";
import {TextAreaProps} from "./TextArea.props";
import styles from "./TextArea.module.css";
import cn from "classnames";

export const TextArea = ({error, placeholder, name, ...props}: TextAreaProps): React.ReactElement => {
    return (
        <div {...props} className={styles.container}>
            <textarea
                name={name}
                placeholder={placeholder}
                className={cn(styles.textarea, {
                    [styles.textarea__error]: error,
                })}
            />
            {error && <span className={styles.error}>{error.message}</span>}
        </div>
    );
};