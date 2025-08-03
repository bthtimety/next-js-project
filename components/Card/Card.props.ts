import {DetailedHTMLProps, HTMLAttributes} from 'react';

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string;
    description: string;
    tags: string[];
    date: string;
    timer: string;
    likes_counter: number;
    like_id: string;
    href: string;
}