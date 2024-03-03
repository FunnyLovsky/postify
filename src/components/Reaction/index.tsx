import { FC } from 'react'
import styles from './style.module.scss'
import { BiSolidLike, BiSolidDislike } from 'react-icons/bi'
import { changeReaction } from '@/store/reducers/posts/actionCreators'
import { useAppDispatch } from '@/store/hooks'
import { IPost } from '@/models/IPost'

interface IProps {
    post: IPost
    isLoading?: boolean
}

const Reactions: FC<IProps> = ({ post, isLoading }) => {
    const { id, dislike, like, reaction } = post
    const dispatch = useAppDispatch()

    const onLikeHandler = () => {
        dispatch(changeReaction('like', id))
    }

    const onDislikeHandler = () => {
        dispatch(changeReaction('dislike', id))
    }

    return (
        <div className={styles.cont} style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
            <div className={styles.like_item}>
                <BiSolidLike
                    id={reaction == 'like' ? styles[reaction] : undefined}
                    onClick={onLikeHandler}
                />
                <p>{like}</p>
            </div>
            <div className={styles.dislike_item}>
                <BiSolidDislike
                    id={reaction == 'dislike' ? styles[reaction] : undefined}
                    onClick={onDislikeHandler}
                />
                <p>{dislike}</p>
            </div>
        </div>
    )
}

export default Reactions
