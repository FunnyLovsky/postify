import { useEffect } from 'react'
import PostList from '../PostList'
import Search from '../Search'
import Container from '../ui/Container'
import styles from './style.module.scss'
import Loader from '../ui/Loader'
import { setSearchPosts } from '@/store/reducers/searchPosts/searchPostsReducer'
import { useAppDispatch, useAppSelector } from '@/store/hooks'

const Blog = () => {
    const { posts, isLoading, error } = useAppSelector((state) => state.postReducer)
    const { title, searchPosts } = useAppSelector((state) => state.searchPostsReducer)
    const dispath = useAppDispatch()

    useEffect(() => {
        if (title.trim() === '') {
            dispath(setSearchPosts(posts))
        }
    }, [posts, dispath, title])

    return (
        <Container>
            <h1 className={styles.title}>Блог</h1>
            <p className={styles.subtitle}>
                Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а также
                переводим зарубежные статьи
            </p>

            <Search posts={posts} value={title} />

            {error && <h1>{error}</h1>}

            {!isLoading ? <PostList searchPosts={searchPosts} /> : <Loader type="big" />}
        </Container>
    )
}

export default Blog
