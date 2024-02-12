/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import AppRouter from './router/AppRouter'
import { useActions } from './store/hooks'

const App = () => {
    const { fetchPosts } = useActions()

    useEffect(() => {
        fetchPosts()
    }, [])
    return <AppRouter />
}

export default App
