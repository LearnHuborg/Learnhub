import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/Context.jsx';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const validatePassword = (password) => {
        const hasNumber = /\d/;
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
        const isValidLength = password.length >= 8;
        let strength = '';

        if (isValidLength && hasNumber.test(password) && hasSpecialChar.test(password)) {
            strength = 'strong';
        } else if (isValidLength && (hasNumber.test(password) || hasSpecialChar.test(password))) {
            strength = 'medium';
        } else {
            strength = 'weak';
        }

        setPasswordStrength(strength);
    };

    const handleSignup = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error('Passwords do not match!', { position: "top-center" });
            return;
        }

        if (passwordStrength === 'weak') {
            toast.error('Password is too weak. It must be at least 8 characters long and contain a number and a special character.', { position: "top-center" });
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('https://quiz-app-sandy-one.vercel.app/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password, email }),
            });

            const data = await response.json();
            if (response.ok) {
                login(data.token, username, email);
                setTimeout(() => {
                    navigate('/verify-otp');
                }, 500);
            } else {
                toast.error(data.message || 'Signup failed. Please try again.', { position: "top-center" });
            }
        } catch (error) {
            console.error('Signup error:', error);
            toast.error('An error occurred during signup. Please try again later.', { position: "top-center" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-300 via-blue-300 to-green-300">
            <form onSubmit={handleSignup} className="w-full max-w-md p-8 space-y-6 transition-transform transform bg-white rounded-lg shadow-2xl hover:scale-105 hover:shadow-3xl">
                <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-3 transition duration-300 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 transition duration-300 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            validatePassword(e.target.value);
                        }}
                        className="w-full p-3 transition duration-300 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <div className="absolute cursor-pointer right-3 top-3" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? (
                            <AiFillEyeInvisible className="w-6 h-6" />
                        ) : (
                            <AiFillEye className="w-6 h-6" />
                        )}
                    </div>
                </div>
                {password && (
                    <div className="text-sm">
                        Password Strength: <span className={`font-bold ${passwordStrength === 'strong' ? 'text-green-500' : passwordStrength === 'medium' ? 'text-yellow-500' : 'text-red-500'}`}>
                            {passwordStrength.charAt(0).toUpperCase() + passwordStrength.slice(1)}
                        </span>
                    </div>
                )}
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full p-3 transition duration-300 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <button
                    type="submit"
                    className={`w-full px-4 py-3 font-bold text-white bg-blue-500 rounded-lg transition-transform transform hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={loading}
                >
                    {loading ? 'Signing Up...' : 'Sign Up'}
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Signup;
