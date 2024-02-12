import { FC } from 'react'
import styles from './style.module.scss'
import { IPost } from '../../models/IPost'
import Button from '../Button'
import Reactions from '../Reaction'

interface IProps {
    post: IPost
    type: 'big' | 'small'
}

const Post: FC<IProps> = ({ post, type }) => {
    const bigPost = (
        <div className={styles.cont}>
            <div className={styles.title}>
                <h3>{post.title}</h3>
                <Reactions />
            </div>
            <p>{post.body}</p>
            <div className={styles.footer}>
                <Button type="next" id={post.id} />
            </div>
        </div>
    )

    const smallPost = (
        <div className={styles.cont}>
            <h3>{post.title}</h3>
            <div className={styles.reactions}>
                <Reactions />
                <Button type="next" id={post.id} />
            </div>
        </div>
    )

    return (
        <div className={[styles[type], styles.post].join(' ')}>
            <img className={styles.img} src={post.img} alt="img" />
            {type === 'big' ? bigPost : smallPost}
        </div>
    )
}

export default Post
