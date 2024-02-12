import { IPost } from '../../models/IPost'
import PostList from '../PostList'
import Search from '../Search'
import Container from '../ui/Container'
import styles from './style.module.scss'

const Blog = () => {
    const posts: IPost[] = [
        {
            id: '1',
            title: 'Что нужно знать об эффективной интернет-рекламе?',
            body:
                'Интернет - огромный ресурс, позволяющий продвигать свои услуги практически на любую аудиторию. Ежедневно в сеть выходит более 5 миллиардов людей - каждый из них может увидеть вашу рекламу и стать вашим потенциальным клиентом. Рассказываем, как правильно настраивать рекламу в интернете.',
            img: 'https://placehold.co/600x400?text=Hello+World',
        },
        {
            id: '2',
            title: 'Что нужно знать об эффективной интернетs-рекламе?',
            body: 'bla-bla',
            img: 'https://placehold.co/603x400?text=Hello+World',
        },
        {
            id: '3',
            title: 'Что нужно знать об эффективной интернетs-рекламе?',
            body: 'bla-bla',
            img: 'https://placehold.co/603x400?text=Hello+World',
        },
        {
            id: '4',
            title: 'Что нужно знать об эффективной интернетs-рекламе?',
            body: 'bla-bla',
            img: 'https://placehold.co/603x400?text=Hello+World',
        },
    ]
    return (
        <Container>
            <h1 className={styles.title}>Блог</h1>
            <p className={styles.subtitle}>
                Здесь мы делимся интересными кейсами из наших проектов, пишем
                про IT, а также переводим зарубежные статьи
            </p>

            <Search />
            <PostList posts={posts} />
        </Container>
    )
}

export default Blog
