import { IPostItem } from "@/interfaces/posts.interface";
import { BASE_URL } from "@/constants";

export async function getPosts(): Promise<IPostItem[]> {
    const res = await fetch(BASE_URL + "/posts/");

    if (!res.ok) {
        return [];
    }
    return res.json();
}