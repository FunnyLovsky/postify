import Main from '../pages/Main'
import Post from '../pages/Post'

interface IRoute {
    path: RoutesName
    component: React.ReactNode
}

export enum RoutesName {
    MAIN = '/',
    POST = '/post/:id',
}

export const routes: IRoute[] = [
    {
        path: RoutesName.MAIN,
        component: <Main />,
    },
    {
        path: RoutesName.POST,
        component: <Post />,
    },
]
