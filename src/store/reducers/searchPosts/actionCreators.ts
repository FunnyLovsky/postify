import { IPost } from '@/models/IPost'
import { PostsService } from '@/store/api/PostsService'
import { createAppAsyncThunk } from '@/store/hooks'
import { mapPostsWithState } from '@/utils/mapPostsWithState'

export const fetchSearchPosts = createAppAsyncThunk(
    'detailPost/fecthSeacrhPosts',
    async (title: string, { rejectWithValue, getState }) => {
        try {
            const response: IPost[] = await PostsService.seacrhPosts(title)
            return mapPostsWithState(response, getState)
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
