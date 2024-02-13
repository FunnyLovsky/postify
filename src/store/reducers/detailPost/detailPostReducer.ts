import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../../../models/IPost";

interface DetailPostState {
    isLoading: boolean,
    error: null | string,
    post: IPost,
}

const initialState: DetailPostState = {
    isLoading: true,
    error: null,
    post: {} as IPost,
}

const detailPostsReducer = createSlice({
    name: "detailPost",
    initialState,
    reducers: {
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload;
        },

        setIsLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },

        setPost(state, action: PayloadAction<IPost>) {
            state.post = action.payload;
        },
    }
})


export const { setError, setIsLoading, setPost } = detailPostsReducer.actions
export default detailPostsReducer.reducer