import { Navigate, Route, Routes } from 'react-router-dom';
import { Sidebar } from '../../Ui/components/Sidebar';

export const AgendifyRoutes = () => {
    return (
        <>
            <Sidebar/>

            <div className="container">
                <Routes>

                <Route path="todo" element={<todo />} />
                    {/* <Route path="Home" element={<HomePage />} />

                    <Route path="/" element={<Navigate to="/Home" />} /> */}

                </Routes>
            </div>


        </>
    )
}
