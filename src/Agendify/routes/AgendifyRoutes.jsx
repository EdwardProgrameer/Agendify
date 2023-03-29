import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages';

export const AgendifyRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="Home" element={<HomePage />} />



                    <Route path="/" element={<Navigate to="/Home" />} />

                </Routes>
            </div>


        </>
    )
}
