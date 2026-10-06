import { useState, type ReactNode } from "react"
import { AuthContext } from "./authContext"
import { AUTH_TOKEN_LS_VARIABLE } from "@/data/localStorage.data"

export const AuthProviver = ({ children }: { children: ReactNode }) => {
    const [isAuth, setIsAuth] = useState(Boolean(localStorage.getItem(AUTH_TOKEN_LS_VARIABLE)))

    const login = (token: string) => {
        localStorage.setItem(AUTH_TOKEN_LS_VARIABLE, token)
        setIsAuth(true)
    }

    const logout = () => {
        localStorage.removeItem(AUTH_TOKEN_LS_VARIABLE)
        setIsAuth(false)
    }

    return (
        <AuthContext.Provider value={{ isAuth, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}