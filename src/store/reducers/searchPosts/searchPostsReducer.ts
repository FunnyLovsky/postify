import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchSearchPosts } from './actionCreators'
import { IPost } from '@/models/IPost'

interface SearchPostsState {
    isLoading: boolean
    error: null | string
    searchPosts: IPost[]
    title: string
}

const initialState: SearchPostsState = {
    isLoading: false,
    error: null,
    searchPosts: [],
    title: '',
}
const searchPostsReducer = createSlice({
    name: 'searchPosts',
    initialState,
    reducers: {
        setTitle(state, action: PayloadAction<string>) {
            state.title = action.payload
        },

        setSearchPosts(state, action: PayloadAction<IPost[]>) {
            state.searchPosts = action.payload
        },

        changeSearchPost(state, action: PayloadAction<IPost>) {
            const { id } = action.payload
            state.searchPosts = state.searchPosts.map((post) =>
                post.id === id ? action.payload : post
            )
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSearchPosts.pending, (state) => {
            state.isLoading = true
            state.error = null
        })
        builder.addCase(fetchSearchPosts.fulfilled, (state, action) => {
            state.isLoading = false
            state.searchPosts = action.payload
        })
        builder.addCase(fetchSearchPosts.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    },
})

export const { setSearchPosts, setTitle, changeSearchPost } = searchPostsReducer.actions
export default searchPostsReducer.reducer
