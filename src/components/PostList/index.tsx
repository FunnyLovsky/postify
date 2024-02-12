import { FC } from 'react'
import styles from './style.module.scss'
import { IPost } from '../../models/IPost'
import Post from '../Post'

interface IProps {
    posts?: IPost[]
}
const PostList: FC<IProps> = ({ posts }) => {
    return (
        <div className={styles.list}>
            {posts!.map((post, index) => (
                <Post
                    key={post.id}
                    post={post}
                    type={index === 0 ? 'big' : 'small'}
                />
            ))}
        </div>
    )
}

export default PostList
