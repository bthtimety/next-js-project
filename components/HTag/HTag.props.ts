import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface HTagProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    tag: "h1" | "h2" | "h3";
    children: ReactNode;
}