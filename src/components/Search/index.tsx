import { FC } from 'react'
import styles from './style.module.scss'

interface IProps {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Search: FC<IProps> = ({onChange, value}) => {
    return (
        <input
            className={styles.input}
            type="text"
            placeholder="Поиск по названию статьи"
            value={value}
            onChange={onChange}
        />
    )
}

export default Search
