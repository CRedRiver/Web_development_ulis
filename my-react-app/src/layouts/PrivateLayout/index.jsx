import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../../components/navbar";

export default function PrivateLayout() {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/login" />;
    }

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}