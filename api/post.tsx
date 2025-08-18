import {IPostItem} from "@/interfaces/posts.interface";
import {BASE_URL} from "@/constants";

export async function getPost(id: string): Promise<IPostItem> {
    const res = await fetch(BASE_URL + "/posts/" + id);

    if (!res.ok) {
        return res.json();
    }
    return res.json();
}