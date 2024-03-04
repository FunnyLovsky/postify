import styles from './style.module.scss'
import Post from '../Post'
import { FC } from 'react'
import { IPost } from '@/models/IPost'

interface IProps {
    searchPosts: IPost[]
}

const PostList: FC<IProps> = ({ searchPosts }) => {
    if (!searchPosts || searchPosts.length === 0) {
        return <h1>Ничего не найдено :(</h1>
    }

    const bigPost = searchPosts[0]
    const otherPosts = searchPosts.slice(1)
    const halfLength = Math.ceil(otherPosts.length / 2)
    const leftColumn = otherPosts.slice(0, halfLength)
    const rightColumn = otherPosts.slice(halfLength)

    return (
        <div className={styles.list}>
            <Post post={bigPost} type="big" />
            <div className={styles.list}>
                <div className={styles.column}>
                    {leftColumn.map((post) => (
                        <Post key={post.id} post={post} type="small" />
                    ))}
                </div>
                <div className={styles.column}>
                    {rightColumn.map((post) => (
                        <Post key={post.id} post={post} type="small" />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PostList
