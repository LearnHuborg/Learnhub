import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/Context';

const AuthRoute = () => {
    const { isAuthenticated } = useContext(AuthContext);

    console.log("AuthRoute - User is authenticated:", isAuthenticated);

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthRoute;