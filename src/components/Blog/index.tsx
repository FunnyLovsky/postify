import PostList from '../PostList'
import Search from '../Search'
import Container from '../ui/Container'
import styles from './style.module.scss'

const Blog = () => {
    return (
        <Container>
            <h1 className={styles.title}>Блог</h1>
            <p className={styles.subtitle}>
                Здесь мы делимся интересными кейсами из наших проектов, пишем
                про IT, а также переводим зарубежные статьи
            </p>

            <Search />
            <PostList />
        </Container>
    )
}

export default Blog
