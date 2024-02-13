import { FC } from 'react'
import styles from './style.module.scss'
import { NavLink } from 'react-router-dom'
import { RoutesName } from '../../router/routes'

interface IProps {
    type: 'next' | 'back'
    id?: string
}

const Button: FC<IProps> = ({ type, id }) => {
    const handleClick = () => {
        window.history.back()
    }

    const component =
        type === 'next' ? (
            <NavLink
                to={`${RoutesName.MAIN}post/${id}`}
                className={styles[type]}
            >
                Читать далее
            </NavLink>
        ) : (
            <button className={styles[type]} onClick={handleClick}>
                Вернуться к статьям
            </button>
        )

    return component
}

export default Button
