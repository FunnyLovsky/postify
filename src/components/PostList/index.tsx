import styles from './style.module.scss'
import Post from '../Post'
import { useAppSelector } from '../../store/hooks'

const PostList = () => {
    const { posts } = useAppSelector((state) => state.postReducer)

    return (
        <div className={styles.list}>
            {posts.map((post, index) => (
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
