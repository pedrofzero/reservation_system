import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthLayout = () => {

    const navigate = useNavigate();
    const token = window.localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            return navigate('/login');
        }
    }, []);

    return <Outlet />

}

export default AuthLayout;