import { useContext, useState, type ReactNode } from "react"
import { AuthContext } from "./authContext"

export const AuthProviver = ({ children }: { children: ReactNode }) => {
    const [isAuth, setIsAuth] = useState(Boolean(localStorage.getItem('token')))

    const login = (token: string) => {
        localStorage.setItem('token', token)
        setIsAuth(true)
    }

    const logout = () => {
        localStorage.removeItem('token')        
        setIsAuth(false)
    }

    return (
        <AuthContext.Provider value={{ isAuth, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth должен использоваться внутри AuthProvider");
    }

    return context;
};