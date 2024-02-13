import { useEffect, useState } from 'react'
import { useAppSelector } from '../../store/hooks'
import PostList from '../PostList'
import Search from '../Search'
import Container from '../ui/Container'
import styles from './style.module.scss'
import { IPost } from '../../models/IPost'

const Blog = () => {
    const { posts, isLoading, error } = useAppSelector((state) => state.postReducer);
    const [value, setValue] = useState('');
    const [searchPosts, setSeacrchPosts] = useState<IPost[]>([]);

    useEffect(() => {
        setSeacrchPosts(posts)
    }, [posts])

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const title = e.target.value;

        setValue(title);

        if(title.trim() === '') {
            setSeacrchPosts(posts)
        } else {
            setSeacrchPosts([
                ...posts.filter(
                    (post) =>
                        post.title.toLowerCase().slice(0, title.length) ===
                        title.toLowerCase()
                ),
            ])
        }
    }

    return (
        <Container>
            <h1 className={styles.title}>Блог</h1>
            <p className={styles.subtitle}>
                Здесь мы делимся интересными кейсами из наших проектов, пишем
                про IT, а также переводим зарубежные статьи
            </p>

            <Search value={value} onChange={onChangeHandler}/>

            {!isLoading 
                ? <PostList searchPosts={searchPosts}/>
                : <h1>Загрузка постов...</h1>
            }

            {error && <h1>{error}</h1>}
        </Container>
    )
}

export default Blog
