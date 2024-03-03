import { IPost } from '@/models/IPost'
import { RootState } from '@/store'
import { findPostById } from './findPostById'

export const mapPostsWithState = (response: IPost[], getState: () => RootState) => {
    return response.map((item) => {
        const { dislike, like, reaction, img } = findPostById(item.id, getState().postReducer.posts)
        return {
            ...item,
            dislike,
            like,
            reaction,
            img,
        }
    })
}
