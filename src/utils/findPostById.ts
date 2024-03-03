import { IPost } from '@/models/IPost'

export const findPostById = (id: number, posts: IPost[]) => {
    return posts.find((post) => post.id === id)
}
