import { Route, Routes } from "react-router-dom"
import { AgendifyRoutes } from "../Agendify/routes/AgendifyRoutes"
import LoginPage from "../auth/pages/LoginPage"


export const AppRouter = () => {
    return (
        <>

            <Routes>

                <Route path="login" element={<LoginPage />} />

                <Route path="/*" element={<AgendifyRoutes />} />

            </Routes>

        </>
    )
}
