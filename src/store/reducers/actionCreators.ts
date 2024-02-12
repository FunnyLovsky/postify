import { AppDispatch } from ".."
import { IPost } from "../../models/IPost";
import { getRandom } from "../../utils/getRandom";
import { PostsService } from "../api/PostsService";
import { setError, setIsLoading, setPosts } from "./postsReducer";

const fetchPosts = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(setIsLoading(true));
        const response: IPost[] = await PostsService.fetchPosts();
        const posts = response.map(item => ({
            ...item,
            dislike: getRandom(0, 50),
            like: getRandom(0, 50),
            reaction: null
        }));
        dispatch(setPosts(posts));
        dispatch(setIsLoading(false))
    } catch (error: any) {
        dispatch(setIsLoading(false));
        dispatch(setError(error.message))
    }

}

export const postsActionCreators = {
    fetchPosts
}