import { FC } from 'react'
import styles from './style.module.scss'
import Loader from '../ui/Loader'
import { IoSearchOutline } from 'react-icons/io5'
import useDebounce from '@/hooks/useDebounce'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setSearchPosts, setTitle } from '@/store/reducers/searchPosts/searchPostsReducer'
import { fetchSearchPosts } from '@/store/reducers/searchPosts/actionCreators'
import { IPost } from '@/models/IPost'

interface IProps {
    posts: IPost[]
    value: string
}

const Search: FC<IProps> = ({ posts, value }) => {
    const { isLoading } = useAppSelector((state) => state.searchPostsReducer)
    const dispath = useAppDispatch()
    const debouncedSearch = useDebounce(search, 500)

    async function search(title: string) {
        if (title.trim() === '') {
            dispath(setSearchPosts(posts))
        } else {
            dispath(fetchSearchPosts(title))
        }
    }

    const onChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
        dispath(setTitle(e.target.value))
        debouncedSearch(e.target.value)
    }
    return (
        <div className={styles.cont}>
            <div className={styles.icon}>
                {isLoading ? <Loader type="small" /> : <IoSearchOutline />}
            </div>

            <input
                className={styles.input}
                type="text"
                placeholder="Поиск по названию статьи"
                value={value}
                onChange={onChangeHandler}
            />
        </div>
    )
}

export default Search
