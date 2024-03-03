import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchDetailPost } from './actionCreators'
import { IPost } from '@/models/IPost'

interface DetailPostState {
    isLoading: boolean
    error: null | string
    detailPost: IPost
}

const initialState: DetailPostState = {
    isLoading: true,
    error: null,
    detailPost: {
        title: '',
        body: '',
        img: '',
        id: 0,
        like: 0,
        dislike: 0,
        reaction: null,
    },
}

const detailPostsReducer = createSlice({
    name: 'detailPost',
    initialState,
    reducers: {
        setPost(state, action: PayloadAction<IPost>) {
            state.detailPost = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDetailPost.pending, (state) => {
            state.isLoading = true
            state.error = null
        })
        builder.addCase(fetchDetailPost.fulfilled, (state, action) => {
            state.isLoading = false
            state.detailPost = action.payload
        })
        builder.addCase(fetchDetailPost.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    },
})

export const { setPost } = detailPostsReducer.actions
export default detailPostsReducer.reducer
