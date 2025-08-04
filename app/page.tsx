import styles from "./page.module.css";
import {Metadata} from "next";
import { Card } from "@/components";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Главная страница",
        description: "Главная страница блога",
        keywords: "Блог, программирование, front-end, главная, статьи"
    };
}

export default function Home() {
    return (
        <main className={styles.main}>
            <Card
                title="Как работать с CSS Grid"
                description="Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы.."
                tags={["Front-end"]}
                date="1 месяц назад"
                timer="3 минуты"
                likes_counter={4}
                like_id="1"
                href="#"
            />
        </main>
    );
}
