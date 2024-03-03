import { useEffect } from 'react'
import Button from '../Button'
import Reactions from '../Reaction'
import Container from '../ui/Container'
import styles from './style.module.scss'
import { useParams } from 'react-router-dom'
import Image from '../ui/Image'
import Loader from '../ui/Loader'
import { fetchDetailPost } from '@/store/reducers/detailPost/actionCreators'
import { useAppDispatch, useAppSelector } from '@/store/hooks'

const PostDetail = () => {
    const { error, isLoading, detailPost } = useAppSelector((state) => state.detailPostReducer)
    const { id } = useParams()
    const dispacth = useAppDispatch()

    useEffect(() => {
        dispacth(fetchDetailPost(+id!))
    }, [id, dispacth])

    if (error) {
        return (
            <Container>
                <h1>{error}</h1>
            </Container>
        )
    }

    return (
        <Container>
            <div className={styles.header}>
                <Button type="back" />
                <Reactions post={detailPost} isLoading={isLoading} />
            </div>
            {isLoading ? (
                <Loader type="big" />
            ) : (
                <div className={styles.block}>
                    <h3>{detailPost.title}</h3>
                    <div className={styles.cont}>
                        <Image type="big" img={detailPost.img} />
                        <p>{detailPost.body}</p>
                    </div>
                </div>
            )}
        </Container>
    )
}

export default PostDetail
