import { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import QuestionCard from './QuestionCard';
import DigitalTimer from './DigitalTimer';

const QuizPage = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(60);
    const [isAnswered, setIsAnswered] = useState(false);
    const [answerState, setAnswerState] = useState(null);
    const [quizId, setQuizId] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    const { numQuestions, category, difficulty, type } = location.state;

    // Cache questions in localStorage to reduce API calls
    const cacheKey = useMemo(() => `${category}-${difficulty}-${type}-${numQuestions}`, [category, difficulty, type, numQuestions]);

    const fetchQuestions = useCallback(async () => {
        try {
            const cachedQuestions = localStorage.getItem(cacheKey);
            if (cachedQuestions) {
                setQuestions(JSON.parse(cachedQuestions));
                setLoading(false);
            } else {
                const response = await axios.get('https://opentdb.com/api.php', {
                    params: {
                        amount: numQuestions,
                        category,
                        difficulty,
                        type,
                    },
                });
                localStorage.setItem(cacheKey, JSON.stringify(response.data.results));
                setQuestions(response.data.results);
                setLoading(false);
            }
        } catch (error) {
            console.error('Error fetching questions:', error);
            setTimeout(fetchQuestions, 3000); // Retry after 3 seconds
            setLoading(false);
        }
    }, [cacheKey, numQuestions, category, difficulty, type]);

    useEffect(() => {
        fetchQuestions();
    }, [fetchQuestions]);

    // Generate and store quizId only once
    useEffect(() => {
        setQuizId(Math.random().toString(36).substr(2, 10).toUpperCase());
    }, []);

    // Timer logic with optimizations
    useEffect(() => {
        if (timer === 0 && !isAnswered) {
            skipQuestion();
        }
        const interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer > 0 ? prevTimer - 1 : prevTimer);
        }, 1000);
        return () => clearInterval(interval);
    }, [timer, isAnswered]);

    // Handle answer logic optimized
    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore((prevScore) => prevScore + 1);
            setAnswerState('correct');
        } else {
            setAnswerState('incorrect');
        }
        setIsAnswered(true);
    };

    const nextQuestion = useCallback(() => {
        if (!isAnswered) return;
        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < questions.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
            setTimer(60);
            setIsAnswered(false);
            setAnswerState(null);
        } else {
            handleFinishTest();
        }
    }, [currentQuestionIndex, isAnswered, questions.length]);

    const skipQuestion = useCallback(() => {
        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < questions.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
            setTimer(60);
            setIsAnswered(false);
            setAnswerState(null);
        } else {
            handleFinishTest();
        }
    }, [currentQuestionIndex, questions.length]);

    const handleFinishTest = useCallback(() => {
        navigate('/result', { state: { score, quizId } });
    }, [navigate, score, quizId]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
                    <p className="mt-4 text-lg font-semibold text-gray-700">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-4 bg-gray-100 md:space-y-0 md:flex-row md:items-start">
            {questions.length > 0 && (
                <>
                    <DigitalTimer timer={timer} />
                    <div className="flex flex-col items-center justify-center w-full max-w-2xl p-4 bg-white rounded shadow-lg md:flex-grow">
                        <div className="mb-6 text-center">
                            <p className="text-lg font-semibold text-blue-600">Questions Remaining: {questions.length - currentQuestionIndex - 1}</p>
                            <p className="text-lg font-semibold text-blue-600">Questions Done: {currentQuestionIndex}</p>
                        </div>
                        <QuestionCard
                            question={questions[currentQuestionIndex]}
                            handleAnswer={handleAnswer}
                            answerState={answerState}
                            isAnswered={isAnswered}
                        />
                        <div className="flex flex-wrap justify-center mt-4 space-x-2 space-y-2">
                            <div className="flex mt-4 space-x-4">
                                <button
                                    onClick={nextQuestion}
                                    disabled={!isAnswered}
                                    className={`w-1/2 px-4 py-2 font-bold text-white rounded-lg shadow-md transition duration-300 ${isAnswered ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'}`}
                                >
                                    Next Question
                                </button>
                                <button
                                    onClick={skipQuestion}
                                    className="w-1/2 px-4 py-2 font-bold text-white transition duration-300 bg-red-500 rounded-lg shadow-md hover:bg-red-600"
                                >
                                    Skip Question
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default QuizPage;
