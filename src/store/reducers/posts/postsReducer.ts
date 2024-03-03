import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchPosts } from './actionCreators'
import { IPost, IReaction } from '@/models/IPost'

interface PostsState {
    isLoading: boolean
    error: null | string
    posts: IPost[]
}

const initialState: PostsState = {
    isLoading: true,
    error: null,
    posts: [],
}

const postsReducer = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        changeReaction(state, action: PayloadAction<IReaction>) {
            const { id, reaction } = action.payload

            state.posts = state.posts.map((post) =>
                post.id === id ? { ...post, reaction: reaction } : post
            )
        },

        decrementValue(state, action: PayloadAction<IReaction>) {
            const { id, type } = action.payload
            state.posts = state.posts.map((post) =>
                post.id === id
                    ? {
                          ...post,
                          [type]: post[type] - 1,
                      }
                    : post
            )
        },

        incrementValue(state, action: PayloadAction<IReaction>) {
            const { id, type } = action.payload
            state.posts = state.posts.map((post) =>
                post.id === id
                    ? {
                          ...post,
                          [type]: post[type] + 1,
                      }
                    : post
            )
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.isLoading = true
            state.error = null
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.isLoading = false
            state.posts = action.payload
        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    },
})

export const { changeReaction, decrementValue, incrementValue } = postsReducer.actions
export default postsReducer.reducer
