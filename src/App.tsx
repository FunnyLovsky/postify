import { useEffect } from 'react'
import AppRouter from '@/router/AppRouter'
import { useAppDispatch } from '@/store/hooks'
import { fetchPosts } from '@/store/reducers/posts/actionCreators'

const App = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])
    return <AppRouter />
}

export default App
