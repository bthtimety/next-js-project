import React from "react";
import Image from "next/image";
import {CardProps} from "./Card.props";
import {HTag, P, Like} from "..";
import styles from "./Card.module.css";
import ArrowIcon from "./arrow.svg";
import CardCoverImg from "./CardCover.png"

export const Card = ({
                         title,
                         description,
                         tags,
                         date,
                         timer,
                         likes_counter,
                         href,
                         ...props
                     }: CardProps): React.ReactElement => {
    return (
        <div className={styles.card} {...props}>
            <div className={styles.head}>
                <Image
                    src={CardCoverImg}
                    className={styles.head__image}
                    alt={title}
                />
            </div>
            <div className={styles.body}>
                <div className={styles.header}>
                    <div className={styles.header__info}>
                        <div className={styles.tags}>
                            {tags.map((tag, index) => (
                                <React.Fragment key={index}>
                                    <span>{tag}</span>
                                </React.Fragment>
                            ))}
                        </div>
                        <div className={styles.date}>
                            <span>·</span>
                            <span>{date}</span>
                        </div>
                    </div>
                    <div>
                        <Like>
                            {likes_counter}
                        </Like>
                    </div>
                </div>
                <div className={styles.main}>
                    <HTag tag="h2" className={styles.title}>
                        {title}
                    </HTag>
                    <div className={styles.description}>
                        <P>{description}</P>
                    </div>
                </div>
                <div className={styles.footer}>
                    <span>{timer}</span>
                    <a className={styles.link} href="#">
                        Читать
                        <Image src={ArrowIcon} alt="arrow"/>
                    </a>
                </div>
            </div>
        </div>
    );
};