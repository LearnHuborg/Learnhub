import { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Context/Context';

const ResultPage = () => {
    const { email } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const { state } = location;
    const score = state?.score || 0;
    const quizId = state?.quizId || '';
    const [isSaving, setIsSaving] = useState(false);

    const handleSaveScore = async () => {
        if (!email || !quizId) {
            toast.error('Error: Missing user or quiz ID.', { position: "bottom-right" });
            return;
        }

        if (isSaving) return;

        try {
            setIsSaving(true);
            toast.info('Saving score...', { position: "bottom-right" });

            const payload = { userId: email, quizId, score };
            console.log('Payload:', payload);

            const response = await axios.post('https://quiz-app-sandy-one.vercel.app/api/auth/saveScore', payload);
            console.log('Score saved successfully:', response.data);

            toast.success('Score saved successfully!', { position: "bottom-right" });

            setTimeout(() => {
                navigate('/');
            }, 6000);
        } catch (error) {
            console.error('Error saving score:', error.response ? error.response.data : error.message);
            toast.error('Error saving score. Please try again.', { position: "bottom-right" });
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold text-blue-800">Quiz Completed!</h1>
            <p className="text-lg text-gray-700">Your score: {score}</p>
            <button
                onClick={handleSaveScore}
                disabled={isSaving}
                className={`px-4 py-2 mt-4 font-bold text-white transition-colors duration-300 ${isSaving ? 'bg-gray-400' : 'bg-blue-600'} rounded hover:${isSaving ? '' : 'bg-blue-800'}`}
            >
                {isSaving ? 'Saving...' : 'Save Score'}
            </button>
            <button
                onClick={() => navigate('/')}
                className="px-4 py-2 mt-4 font-bold text-white transition-colors duration-300 bg-blue-600 rounded hover:bg-blue-800"
            >
                Go Home
            </button>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default ResultPage;
