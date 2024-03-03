import { IPost, TReact } from '@/models/IPost'
import { setPost } from '../detailPost/detailPostReducer'
import { changeSearchPost } from '../searchPosts/searchPostsReducer'
import { changeReaction, decrementValue, incrementValue } from './postsReducer'
import { AppDispatch } from '@/store'

export const updateDetailPost = (
    detailPost: IPost,
    post: IPost,
    id: number,
    dispatch: AppDispatch
) => {
    if (id === detailPost.id) {
        const { reaction, like, dislike } = post
        dispatch(setPost({ ...detailPost, reaction, like, dislike }))
    }
}

export const updateSearchPost = (searchPost: IPost, post: IPost, dispatch: AppDispatch) => {
    if (searchPost) {
        const { reaction, like, dislike } = post
        dispatch(changeSearchPost({ ...searchPost, reaction, like, dislike }))
    }
}

export const updatePostReaction = (
    dispatch: AppDispatch,
    id: number,
    type: TReact,
    post: IPost
) => {
    const { reaction } = post

    if (type === reaction) {
        dispatch(changeReaction({ id, reaction: null }))
        dispatch(decrementValue({ id, type }))
    } else {
        dispatch(changeReaction({ id, reaction: type }))
        dispatch(incrementValue({ id, type }))

        if (reaction) {
            dispatch(decrementValue({ id, type: reaction }))
        }
    }
}
