import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/Context';

const Navbar = () => {
    const navigate = useNavigate();
    const { isAuthenticated, logout } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/home');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="p-4 text-white bg-gray-900">
            <div className="container flex items-center justify-between mx-auto">
                <button
                    onClick={() => navigate('/home')}
                    className="relative px-4 py-2 text-lg font-extrabold text-white transition-transform transform rounded-full shadow-lg sm:text-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                >
                    <span className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-glow opacity-60"></span>
                    <span className="relative z-10 text-shadow-lg">Quiz App</span>
                </button>

                <div className="sm:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                        </svg>
                    </button>
                </div>

                <div className={`sm:flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-0 w-full sm:w-auto ${isMenuOpen ? 'block' : 'hidden'} sm:block`}>
                    <button
                        onClick={() => navigate('/about')}
                        className="w-full px-4 py-2 font-bold text-white transition-transform rounded-full sm:w-auto bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                    >
                        About
                    </button>
                    {isAuthenticated ? (
                        <>
                            <button
                                onClick={() => navigate('/profile')}
                                className="w-full px-4 py-2 font-bold text-white transition-transform rounded-full sm:w-auto bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
                            >
                                Profile
                            </button>
                            <button
                                onClick={handleLogout}
                                className="w-full px-4 py-2 font-bold text-white transition-transform rounded-full sm:w-auto bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={() => navigate('/login')}
                                className="w-full px-4 py-2 font-bold text-white transition-transform rounded-full sm:w-auto bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                            >
                                Login
                            </button>
                            <button
                                onClick={() => navigate('/signup')}
                                className="w-full px-4 py-2 font-bold text-white transition-transform rounded-full sm:w-auto bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
                            >
                                Sign Up
                            </button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
