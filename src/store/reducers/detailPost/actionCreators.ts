import { AppDispatch } from "../.."
import { IPost } from "../../../models/IPost";
import { generateUrlImage } from "../../../utils/generateUrlImage";
import { getRandom } from "../../../utils/getRandom";
import { PostsService } from "../../api/PostsService";
import { setError, setIsLoading, setPost } from "./detailPostReducer";

const fetchDetailPost = (id: string) => async (dispatch: AppDispatch) => {
    try {
        const response: IPost[] = await PostsService.fetchDetailPost(id);
        const post = response.map((item, index) => ({
            ...item,
            dislike: getRandom(0, 50),
            like: getRandom(0, 50),
            reaction: null,
            img: generateUrlImage(item.title, index)
        }));
        
        dispatch(setPost(post[0]))
        await new Promise(res => setTimeout(() => res(''), 500))
        dispatch(setIsLoading(false))
    } catch (error: any) {
        dispatch(setIsLoading(false));
        dispatch(setError(error.message))
    }
}


export const detailPostActionCreators = {
    fetchDetailPost
}