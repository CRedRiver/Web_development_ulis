import { useNavigate } from "react-router-dom";
import { GoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google";
import { jwtDecode } from 'jwt-decode';
import { useEffect } from "react";

export default function Login() {
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/home');
        }
    }, []);

    const navigate = useNavigate();
    const goToMainPage = () => {
        localStorage.setItem('token', "ashdgsagdasgdhasgjasgdjsagdgasjd")
        navigate("/home");
    };

    // useGoogleOneTapLogin({
    //     onSuccess: handleLoginSuccess,
    //     onError: () => {
    //         console.log('One Tap not available');
    //     },
    // });

    const signInGoogleSuccess = (response) => {
        const token = response.credential;
        const decoded = jwtDecode(token);
        localStorage.setItem('token', token);
        localStorage.setItem('userEmail', JSON.stringify({
            email: decoded.email,
            name: decoded.name,
            picture: decoded.picture
        }));
        navigate("/home");
    }

    return (
        <>
            <div className="login-container">
                <form>
                    <input type="text" id="username" name="username" />
                    <br />
                    <input type="password" id="password" name="password" />
                    <br />
                    <button onClick={goToMainPage}>Submit</button>
                </form>
            </div>
            <div>
                <GoogleLogin
                    onSuccess={signInGoogleSuccess}
                    onError={() => console.log('Login Failed')}
                />
            </div>
        </>
    )
}