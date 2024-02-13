import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost, IReaction } from "../../models/IPost";

interface PostsState {
    isLoading: boolean,
    error: null | string,
    posts: IPost[],
}

const initialState: PostsState = {
    isLoading: true,
    error: null,
    posts: [],
}

const postsReducer = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload;
        },

        setIsLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },

        setPosts(state, action: PayloadAction<IPost[]>) {
            state.posts = action.payload;
        },

        setReaction(state, action: PayloadAction<IReaction>) {
            const { id, reaction } = action.payload;

            state.posts = state.posts.map(post => 
                post.id === id 
                    ? {...post, reaction: reaction!}
                    : post
            ) 
        },

        setLike(state, action: PayloadAction<IReaction>) {
            const { id, like } = action.payload;

            state.posts = state.posts.map(post => 
                post.id === id 
                    ? {...post, like: like!}
                    : post
            ) 
        },

        setDislike(state, action: PayloadAction<IReaction>) {
            const { id, dislike } = action.payload;

            state.posts = state.posts.map(post => 
                post.id === id 
                    ? {...post, dislike: dislike!}
                    : post
            ) 
        }
    }
})


export const { setError, setIsLoading, setPosts, setReaction, setDislike, setLike } = postsReducer.actions
export default postsReducer.reducer