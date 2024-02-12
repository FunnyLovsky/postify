import { Navigate, Route, Routes } from 'react-router-dom'
import { RoutesName, routes } from './routes'

const AppRouter = () => {
    return (
        <Routes>
            {routes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.component}
                />
            ))}
            <Route
                path="*"
                element={<Navigate to={RoutesName.MAIN} replace />}
            />
        </Routes>
    )
}

export default AppRouter
