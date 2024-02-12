import styles from './style.module.scss'
import Post from '../Post'
import { useAppSelector } from '../../store/hooks'

const PostList = () => {
    const { posts, isLoading, error } = useAppSelector((state) => state.postReducer)

    if (isLoading) {
        return <h1>Загрузка постов...</h1>
    }

    if(error) {
        return <h1>{error}</h1>
    }

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
