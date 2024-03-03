import { IPost } from '@/models/IPost'
import { PostsService } from '@/store/api/PostsService'
import { createAppAsyncThunk } from '@/store/hooks'
import { delay } from '@/utils/delay'
import { mapPostsWithState } from '@/utils/mapPostsWithState'

export const fetchDetailPost = createAppAsyncThunk(
    'detailPost/fecthDetailPost',
    async (id: number, { rejectWithValue, getState }) => {
        try {
            const response: IPost[] = await PostsService.fetchDetailPost(id)
            await delay(500)
            return mapPostsWithState(response, getState)[0]
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
