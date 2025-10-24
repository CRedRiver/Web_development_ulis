import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar";

export default function Home() {
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate("/login");
    };
    return (
        <>
            <Navbar />
            <img src='/banner.jpg' alt='banner' className='banner' />
            <button onClick={goToLogin}>Login</button>
        </>
    )
}