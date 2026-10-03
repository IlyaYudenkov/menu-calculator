import { createContext } from "react";

type TAuthContextType = {
    isAuth: boolean;
    login: (token: string) => void;
    logout: () => void;
};

export const AuthContext = createContext<TAuthContextType | null>(null)