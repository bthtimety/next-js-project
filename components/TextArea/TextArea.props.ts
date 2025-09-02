import {DetailedHTMLProps, HTMLAttributes} from "react";
import {FieldError} from "react-hook-form";

export interface TextAreaProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    placeholder: string;
    name: string;
    error?: FieldError;
}