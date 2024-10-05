import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuizConfig = () => {
    const [numQuestions, setNumQuestions] = useState(10);
    const [category, setCategory] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [type, setType] = useState('');
    const navigate = useNavigate();

    const startQuiz = () => {
        navigate('/quiz', {
            state: {
                numQuestions,
                category,
                difficulty,
                type,
            },
        });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-r from-blue-100 via-green-100 to-yellow-100">
            <h2 className="mb-6 text-2xl font-extrabold text-gray-800 md:text-3xl">Configure Your Quiz</h2>
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg md:p-8">
                <div className="mb-6">
                    <label className="block mb-2 text-base font-medium text-gray-800 md:text-lg">Number of Questions:</label>
                    <input
                        type="number"
                        value={numQuestions}
                        onChange={(e) => setNumQuestions(e.target.value)}
                        className="w-full p-3 text-base transition duration-300 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-base font-medium text-gray-800 md:text-lg">Select Category:</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full p-3 text-base transition duration-300 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Any Category</option>
                        <option value="9">General Knowledge</option>
                        <option value="21">Sports</option>
                        <option value="18">Computer</option>
                    </select>
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-base font-medium text-gray-800 md:text-lg">Select Difficulty:</label>
                    <select
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                        className="w-full p-3 text-base transition duration-300 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Any Difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-base font-medium text-gray-800 md:text-lg">Select Type:</label>
                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="w-full p-3 text-base transition duration-300 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Any Type</option>
                        <option value="multiple">Multiple Choice</option>
                        <option value="boolean">True/False</option>
                    </select>
                </div>
                <button
                    onClick={startQuiz}
                    className="w-full px-6 py-3 text-base font-bold text-white transition duration-300 ease-in-out transform bg-blue-600 rounded-lg shadow-md md:text-lg hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 active:bg-blue-800 active:scale-95"
                >
                    Start Quiz
                </button>
            </div>
        </div>
    );
};

export default QuizConfig;
