import { useNavigate } from "react-router-dom";

export default function MainPage() {
    const navigate = useNavigate();
    const logOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userEmail");
        navigate("/");
    }

    return (
        <>
            <p>Login successfully</p>
            <button onClick={logOut}>Logout</button>
        </>
    )
}