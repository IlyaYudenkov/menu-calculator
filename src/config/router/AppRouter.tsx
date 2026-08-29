import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./router.config";
import { PRIVATE_PAGES, PUBLIC_PAGES } from "./routes";

export const AppRouter = () => {

    const token = localStorage.getItem('token');

    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={token ?
                            <Navigate to={PRIVATE_PAGES.HOME.path} replace /> :
                            element}
                    />
                ))}

                {privateRoutes.map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={token ?
                            element :
                            <Navigate to={PUBLIC_PAGES.LOGIN.path} replace />
                        }
                    />
                ))}

                <Route
                    path="*"
                    element={
                        <Navigate to={token ? PRIVATE_PAGES.HOME.path : PUBLIC_PAGES.LOGIN.path}
                            replace
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}