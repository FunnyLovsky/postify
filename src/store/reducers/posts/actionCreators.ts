import { findPostById } from '@/utils/findPostById'
import { createAppAsyncThunk } from '@/store/hooks'
import { updateDetailPost, updatePostReaction, updateSearchPost } from './utils'
import { AppDispatch, RootState } from '@/store'
import { IPost, TReact } from '@/models/IPost'
import { generateUrlImage } from '@/utils/generateUrlImage'
import { PostsService } from '@/store/api/PostsService'
import { getRandom } from '@/utils/getRandom'

export const fetchPosts = createAppAsyncThunk(
    'posts/fetchPosts',
    async (_, { rejectWithValue }) => {
        try {
            const response: IPost[] = await PostsService.fetchPosts()
            const posts = response.map((item, index) => ({
                ...item,
                dislike: getRandom(0, 50),
                like: getRandom(0, 50),
                reaction: null,
                img: generateUrlImage(item.title, index),
            }))
            return posts
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const changeReaction =
    (type: TReact, id: number) => (dispatch: AppDispatch, getState: () => RootState) => {
        const post = findPostById(id, getState().postReducer.posts)
        const { detailPost } = getState().detailPostReducer
        const searchPost = findPostById(id, getState().searchPostsReducer.searchPosts)

        updatePostReaction(dispatch, id, type, post)

        const updatePost = findPostById(id, getState().postReducer.posts)

        updateDetailPost(detailPost, updatePost, id, dispatch)
        updateSearchPost(searchPost, updatePost, dispatch)
    }
