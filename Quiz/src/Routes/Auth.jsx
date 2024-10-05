import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthContext } from '../Context/Context';

const AuthRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useContext(AuthContext);

    console.log("AuthRoute - User is authenticated:", isAuthenticated);

    return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};

AuthRoute.propTypes = {
    component: PropTypes.elementType.isRequired,
};

export default AuthRoute;
