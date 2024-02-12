import { FC } from 'react'
import styles from './style.module.scss'
import { NavLink } from 'react-router-dom'
import { RoutesName } from '../../router/routes'

interface IProps {
    type: 'next' | 'back'
    id?: string
}

const Button: FC<IProps> = ({ type, id }) => {
    const link =
        type === 'next' ? `${RoutesName.POST}?id=${id}` : RoutesName.MAIN
    return (
        <NavLink to={link} className={styles[type]}>
            {type === 'next' ? 'Читать далее' : 'Вернуться к статьям'}
        </NavLink>
    )
}

export default Button
