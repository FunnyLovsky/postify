import { AppDispatch, RootState } from ".."
import { IPost, TReact } from "../../models/IPost";
import { generateUrlImage } from "../../utils/generateUrlImage";
import { getRandom } from "../../utils/getRandom";
import { PostsService } from "../api/PostsService";
import { setError, setIsLoading, setPosts, setDislike, setLike, setReaction } from "./postsReducer";

const fetchPosts = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(setIsLoading(true));
        const response: IPost[] = await PostsService.fetchPosts();
        const posts = response.map(item => ({
            ...item,
            dislike: getRandom(0, 50),
            like: getRandom(0, 50),
            reaction: null,
            img: generateUrlImage(item.title)
        }));
        await new Promise(res => setTimeout(() => res(''), 1000))
        dispatch(setPosts(posts))
        dispatch(setIsLoading(false))
    } catch (error: any) {
        dispatch(setIsLoading(false));
        dispatch(setError(error.message))
    }
}

const onReactHandler = (type: TReact, id: string) => (dispatch: AppDispatch, getState: () => RootState) => {
    const {reaction, like, dislike} = getState().postReducer.posts.find(post => post.id === id)!;

    if (type === reaction) {
        dispatch(setReaction({id, reaction: null}))
        type === 'like'
            ? dispatch(setLike({id, like: like - 1,}))
            : dispatch(setDislike({id, dislike: dislike - 1}))
    } else {
        dispatch(setReaction({id, reaction: type}))
        type === 'like'
            ? dispatch(setLike({id, like: like + 1,}))
            : dispatch(setDislike({id, dislike: dislike + 1}))

        if (reaction) {
            reaction === 'like'
                ? dispatch(setLike({id, like: like - 1,}))
                : dispatch(setDislike({id, dislike: dislike - 1}))
        }
    }
}

export const postsActionCreators = {
    fetchPosts,
    onReactHandler
}