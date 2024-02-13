import styles from './style.module.scss'
import Post from '../Post'
import { IPost } from '../../models/IPost'
import { FC } from 'react'

interface IProps {
    searchPosts: IPost[]
}

const PostList: FC<IProps> = ({ searchPosts }) => {
    return (
        <div className={styles.list}>
            {searchPosts.length === 0 ? (
                <h1>Ничего не найдено :(</h1>
            ) : (
                searchPosts.map((post, index) => (
                    <Post
                        key={post.id}
                        post={post}
                        type={index === 0 ? 'big' : 'small'}
                    />
                ))
            )}
        </div>
    )
}

export default PostList
