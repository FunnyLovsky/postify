import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../../models/IPost";

interface PostsState {
    isLoading: boolean,
    error: null | string,
    posts: IPost[],
}

const initialState: PostsState = {
    isLoading: false,
    error: null,
    posts: []
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
    }
})


export const { setError, setIsLoading, setPosts} = postsReducer.actions
export default postsReducer.reducer