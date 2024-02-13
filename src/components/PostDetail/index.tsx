import { useParams } from 'react-router-dom'
import Button from '../Button'
import Reactions from '../Reaction'
import Container from '../ui/Container'
import styles from './style.module.scss'
import { useAppSelector } from '../../store/hooks'

const PostDetail = () => {

    const params = useParams<{ id: string }>();
    console.log(params.id);
    
    // const post = useAppSelector(state => state.postReducer.posts.find(post => post.id === params.id));

    const post = useAppSelector(state => state.postReducer.posts[0]);

    return (
        <Container>
            <div className={styles.header}>
                <Button type="back" />
                <Reactions post={post!}/>
            </div>
            <img src={post?.img} alt="" />
        </Container>
    )
}

export default PostDetail
