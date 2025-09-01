import { ICommentItem } from "@/interfaces/comments.interface";
import { BASE_URL } from "@/constants";

export async function getComments(id: string): Promise<ICommentItem[]> {
    const res = await fetch(BASE_URL + "/comments/?postId=" + id);
    return res.json();
}