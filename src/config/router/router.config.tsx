import { LoginScreen } from "@/screens/LoginScreen";
import { PRIVATE_PAGES, PUBLIC_PAGES } from "./routes";
import { HomeScreen } from "@/screens/HomeScreen";

export const publicRoutes = [
    {
        path: PUBLIC_PAGES.LOGIN.path,
        element: <LoginScreen />,
    }
]

export const privateRoutes = [
    {
        path: PRIVATE_PAGES.HOME.path,
        element: <HomeScreen />,
    }
]