import { Navigate } from "react-router";
import LoginPage from "../pages/LoginPage";
import CreateChatPage from "../pages/CreateChatPage";
import Chat from "../pages/Chat";


export const publicRoutes = [
    {path: '/login', element: <LoginPage />},
    {path: '/*', element: <Navigate to="/login" replace />},
]

export const authRoutes = [
    {path: '/', element: <CreateChatPage />},
    {path: '/chat/:chatId', element: <Chat />},
    {path: '/*', element: <Navigate to="/" replace />},
]
