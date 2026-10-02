import { createContext, useContext, useState } from "react";

type AuthContextType = {
    isAuth: boolean;
    login: (token: string) => void;
    logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProviver = ({ children }) => {
    const [isAuth, setIsAuth] = useState(Boolean(localStorage.getItem('token')))

    const login = (token) => {
        localStorage.setItem('token', token)
        setIsAuth(true)
    }

    const logout = () => {
        localStorage.remove('token')
        setIsAuth(false)
    }

    return (
        <AuthContext.Provider value={{ isAuth, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);