import { combineReducers, configureStore } from '@reduxjs/toolkit'
import postReducer from './reducers/posts/postsReducer'
import detailPostReducer from './reducers/detailPost/detailPostReducer'
import searchPostsReducer from './reducers/searchPosts/searchPostsReducer'

const rootReducer = combineReducers({
    postReducer,
    detailPostReducer,
    searchPostsReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
