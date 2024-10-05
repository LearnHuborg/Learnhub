import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Context/Context';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://quiz-app-sandy-one.vercel.app/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                toast.error(errorData.message || 'User Not Found. Please Sign Up.');
                setTimeout(() => {
                    navigate('/signup');
                }, 3000);
                return;
            }

            const data = await response.json();
            login(data.token, data.username, data.email, data.userId);
            navigate('/');

        } catch (error) {
            toast.error('Login failed: ' + error.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200">
            <div className="w-full max-w-md p-6 transition-transform transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl">
                <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 transition duration-300 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <svg className="absolute w-5 h-5 text-gray-500 top-3 right-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 21v-2a4 4 0 00-8 0v2m8 0a4 4 0 01-8 0m8 0H8m0 0a4 4 0 00-4-4m0 0a4 4 0 00-4 4h8zm8 0a4 4 0 014-4m0 0a4 4 0 014 4h-8z" />
                        </svg>
                    </div>
                    <div className="relative">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 transition duration-300 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <svg className="absolute w-5 h-5 text-gray-500 top-3 right-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11V7a4 4 0 118 0v4m-4 7a4 4 0 110-8 4 4 0 010 8z" />
                        </svg>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 font-bold text-white transition-transform transform bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                        Login
                    </button>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;
