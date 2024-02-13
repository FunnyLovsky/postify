import { FC } from 'react'
import styles from './style.module.scss'
import { BiSolidLike, BiSolidDislike } from 'react-icons/bi'
import { useActions } from '../../store/hooks'
import { IPost } from '../../models/IPost'

interface IProps {
    post: IPost,
    isLoading?: boolean
}

const Reactions: FC<IProps> = ({ post, isLoading }) => {
    const { onReactHandler } = useActions()
    const { id, dislike, like, reaction } = post

    return (
        <div className={styles.cont} style={{opacity: isLoading ? '0' : '1'}}>
            <div className={styles.like}>
                <BiSolidLike
                    style={{ color: reaction === 'like' ? '#219653' : '' }}
                    onClick={() => onReactHandler('like', id)}
                />
                <p>{like}</p>
            </div>
            <div className={styles.dislike}>
                <BiSolidDislike
                    style={{ color: reaction === 'dislike' ? '#EB5757' : '' }}
                    onClick={() => onReactHandler('dislike', id)}
                />
                <p>{dislike}</p>
            </div>
        </div>
    )
}

export default Reactions
