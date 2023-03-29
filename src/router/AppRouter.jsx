import { Route, Routes } from "react-router-dom"
import { HomePage } from "../Agendify/pages"
import LoginPage from "../auth/pages/LoginPage"


export const AppRouter = () => {
    return (
        <>

            <Routes>

                <Route path="login" element={<LoginPage />} />
                <Route path="/*" element={<HomePage />} />

            </Routes>

        </>
    )
}
