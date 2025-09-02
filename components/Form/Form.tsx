"use client";

import {useState} from "react";
import {useForm} from "react-hook-form";
import cn from "classnames";
import {FormProps} from "./Form.props";
import {Input} from "../Input/Input";
import {TextArea} from "../TextArea/TextArea";
import {Button} from "../Button/Button";
import styles from "./Form.module.css";
import {BASE_URL} from "@/constants";
import {IForm} from "@/interfaces/form.interface";

export const Form = ({id, className, ...props}: FormProps) => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm<IForm>();

    const [success, setSuccess] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const onSubmit = async (data: IForm) => {
        try {
            const status = true;
            const res = await fetch(BASE_URL + "/posts/" + id, {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify({
                    status,
                    data
                })
            });
            const json = await res.json();
            if (json.status) {
                setSuccess(true);
                setError(false);
                reset();
            } else {
                setError(true);
            }
        } catch (error) {
            console.error(error);
            setSuccess(false);
            setError(true);
        }
    };
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            {...props}
            className={cn(className, styles.form)}
        >
            <Input
                {...register("name", {
                    required: {value: true, message: "Заполните поле"},
                })}
                placeholder="Имя"
                type="text"
                name="name"
                error={errors.name}
            />
            <TextArea
                {...register("text", {
                    required: {value: true, message: "Заполните поле"},
                })}
                placeholder="Комментарий"
                name="text"
                error={errors.text}
            />
            <Button type="submit">Отправить</Button>
            {success && <div>Комментарий успешно добавлен!</div>}
            {error && <div>Что-то не так, обновите страницу или повторите попытку позже.</div>}
        </form>
    );
};