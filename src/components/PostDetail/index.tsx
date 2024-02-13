/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from 'react'
import { useActions, useAppDispatch, useAppSelector } from '../../store/hooks'
import Button from '../Button'
import Reactions from '../Reaction'
import Container from '../ui/Container'
import styles from './style.module.scss'
import { useParams } from 'react-router-dom'
import { setIsLoading } from '../../store/reducers/detailPost/detailPostReducer'
import Image from '../ui/Image'
import Loader from '../ui/Loader'

const PostDetail = () => {
    const { error, isLoading, post } = useAppSelector(
        (state) => state.detailPostReducer,
    )

    const { fetchDetailPost } = useActions()
    const { id } = useParams()
    const dispacth = useAppDispatch()

    useEffect(() => {
        fetchDetailPost(id!)

        return () => {
            dispacth(setIsLoading(true))
        }
    }, [id])

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
                <Reactions post={post} isLoading={isLoading}/>
            </div>
            {isLoading ? (
                <Loader type='big'/>
            ) : (
                <div className={styles.block}>
                    <h3>{post.title}</h3>
                    <div className={styles.cont}>
                        <Image type="big" img={post.img} />
                        <p>{post.body}</p>
                    </div>
                </div>
            )}
        </Container>
    )
}

export default PostDetail
