import { useState } from 'react'
import styles from './style.module.scss'
import { BiSolidLike, BiSolidDislike } from 'react-icons/bi'
import { getRandom } from '../../utils/getRandom'

type TReact = 'like' | 'dislike' | null

const Reactions = () => {
    const [like, setLike] = useState(getRandom(0, 50))
    const [dislike, setDislike] = useState(getRandom(0, 50))
    const [reaction, setReaction] = useState<TReact>(null)

    const onReactHandler = (type: TReact) => {
        if (type === reaction) {
            setReaction(null)

            type === 'like'
                ? setLike((prev) => prev - 1)
                : setDislike((prev) => prev - 1)
        } else {
            setReaction(type)

            type === 'like'
                ? setLike((prev) => prev + 1)
                : setDislike((prev) => prev + 1)

            if (reaction) {
                reaction === 'like'
                    ? setLike((prev) => prev - 1)
                    : setDislike((prev) => prev - 1)
            }
        }
    }

    return (
        <div className={styles.cont}>
            <div className={styles.like}>
                <BiSolidLike
                    style={{ color: reaction === 'like' ? '#219653' : '' }}
                    onClick={() => onReactHandler('like')}
                />
                <p>{like}</p>
            </div>
            <div className={styles.dislike}>
                <BiSolidDislike
                    style={{ color: reaction === 'dislike' ? '#EB5757' : '' }}
                    onClick={() => onReactHandler('dislike')}
                />
                <p>{dislike}</p>
            </div>
        </div>
    )
}

export default Reactions
