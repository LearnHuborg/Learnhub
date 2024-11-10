import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CodeXWithIcon } from "../../Common/codeX-with-icon";

const QuizConfig = () => {
    const [numQuestions, setNumQuestions] = useState(10);
    const [category, setCategory] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const navigate = useNavigate();

    const startQuiz = () => {
        navigate('/quiz-config/quiz', {
            state: {
                numQuestions,
                category,
            },
        });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 ">
              <CodeXWithIcon/>
            <h2 className="mb-4 text-3xl font-bold text-gray-800">Challenge Yourself</h2>
            <p className="mb-8 text-lg text-gray-600">Start the Quiz!</p>
            <div className="w-full max-w-md p-6 rounded-lg shadow-lg">
                <div className="p-4 mb-6 bg-purple-50 rounded-md">
                    <h3 className="mb-2 text-lg font-semibold text-gray-700">Rules:</h3>
                    <ul className="text-gray-600 text-sm">
                        <li>1. You have to answer within the time limit for each question.</li>
                        <li>2. You can't exit the quiz, so do your best!</li>
                        <li>3. Each correct answer boosts your score, so aim for accuracy.</li>
                        <li>4. You cannot change your answer once submitted.</li>
                        <li>5. Ensure a stable internet connection to avoid disruptions during the quiz.</li>
                    </ul>
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-base font-medium text-gray-800">Number of Questions:</label>
                    <input
                        type="number"
                        value={numQuestions}
                        onChange={(e) => setNumQuestions(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-base font-medium text-gray-800">Select Category:</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        <option value="">Any Category</option>
                        <option value="9">General Knowledge</option>
                        <option value="21">Sports</option>
                        <option value="18">Computer</option>
                    </select>
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-base font-medium text-gray-800">Select Difficulty:</label>
                    <select
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        <option value="">Any Difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
                <button
                    onClick={startQuiz}
                    className="w-full py-3 mt-4 text-lg font-bold text-white transition duration-300 ease-in-out transform bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                    Start Quiz
                </button>
            </div>
        </div>
    );
};

export default QuizConfig;
