import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./router.config";
import { PRIVATE_PAGES, PUBLIC_PAGES } from "./routes";
import { useAuth } from "@/context/auth/useAuth";

export const AppRouter = () => {

    const { isAuth } = useAuth()

    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={isAuth ?
                            <Navigate to={PRIVATE_PAGES.HOME.path} replace /> :
                            element}
                    />
                ))}

                {privateRoutes.map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={isAuth ?
                            element :
                            <Navigate to={PUBLIC_PAGES.LOGIN.path} replace />
                        }
                    />
                ))}

                <Route
                    path="*"
                    element={
                        <Navigate to={isAuth ? PRIVATE_PAGES.HOME.path : PUBLIC_PAGES.LOGIN.path}
                            replace
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}