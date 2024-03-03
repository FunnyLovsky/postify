import { FC, useState } from 'react'
import styles from './style.module.scss'
import classNames from 'classnames'

interface IProps {
    img: string
    type: 'big' | 'small'
}

const Image: FC<IProps> = ({ img, type }) => {
    const [load, setLoad] = useState(false)
    const imgClass = classNames(styles.cont, styles[type])

    return (
        <div className={imgClass}>
            <div className={styles.loader} style={{ display: load ? 'none' : 'block' }}></div>
            <img
                className={styles.img}
                src={img}
                alt="img"
                onLoad={() => setLoad(true)}
                loading="lazy"
            />
        </div>
    )
}

export default Image
