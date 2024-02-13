import { AppDispatch, RootState } from "../.."
import { IPost } from "../../../models/IPost";

import { PostsService } from "../../api/PostsService";
import { setError, setIsLoading, setPost } from "./detailPostReducer";

const fetchDetailPost = (id: number) => async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
        const response: IPost[] = await PostsService.fetchDetailPost(id);
        const {dislike, like, reaction, img} = getState().postReducer.posts.find(post => post.id === id)!
  
        const detailPost = response.map((item) => ({
            ...item,
            dislike,
            like,
            reaction,
            img
        }));
        
        dispatch(setPost(detailPost[0]))
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