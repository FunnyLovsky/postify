import { FC } from 'react'
import styles from './style.module.scss'

interface IProps {
    type: 'big' | 'small'
}

const Loader: FC<IProps> = ({ type }) => {
    const loader =
        type === 'big' ? (
            <div className={styles.cont}>
                <span className={styles[type]}></span>
            </div>
        ) : (
            <span className={styles[type]}></span>
        )

    return loader
}

export default Loader
