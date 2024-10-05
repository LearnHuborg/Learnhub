import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [showMessage, setShowMessage] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setShowMessage(true);
    };

    const handleScrollDown = () => {
        document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <main className="flex flex-col items-center justify-center flex-grow p-4 md:p-6 lg:p-8">
                <h1 className="mb-4 text-2xl font-extrabold text-center text-blue-600 md:text-4xl">
                    Welcome to the Quiz App!
                </h1>
                <p className="mb-4 text-base text-center text-gray-700 md:text-lg">
                    Test your knowledge and have fun!
                </p>
                <div className="max-w-3xl px-4 mb-8 md:px-0">
                    <p className="text-sm text-center text-gray-600 md:text-base">
                        Our Quiz App provides a fun and interactive way to test your knowledge across a variety of topics.
                        Challenge yourself with different levels of difficulty and track your progress over time.
                        Whether you're preparing for an exam or just want to learn something new, our quizzes are designed to keep you engaged and motivated.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-4 px-4 mb-8 md:px-0">
                    <img
                        src="https://i.pinimg.com/originals/98/c2/26/98c22632f37758b49a294ddb7a10ad56.png"
                        alt="MicroScop"
                        className="object-cover w-24 h-24 rounded-lg shadow-md md:w-32 md:h-32"
                    />
                    <img
                        src="https://i.pinimg.com/736x/16/41/f9/1641f9c0398896a05a238c43f0fa20b2.jpg"
                        alt="Map"
                        className="object-cover w-24 h-24 rounded-lg shadow-md md:w-32 md:h-32"
                    />
                    <img
                        src="https://i.pinimg.com/736x/84/bf/ca/84bfca6e2d993b73a9127188b4a62999.jpg"
                        alt="Book"
                        className="object-cover w-24 h-24 rounded-lg shadow-md md:w-32 md:h-32"
                    />
                </div>

                <button
                    onClick={() => navigate('/quiz-config')}
                    className="px-4 py-2 text-base font-semibold text-white transition-transform transform bg-green-500 rounded-lg shadow-lg md:px-6 md:py-3 md:text-lg hover:scale-105 hover:bg-green-600"
                >
                    Start Quiz
                </button>

                <button
                    onClick={handleScrollDown}
                    className="mt-4 text-gray-500 animate-bounce"
                    aria-label="Scroll down"
                >
                    <svg
                        className="w-5 h-5 md:w-6 md:h-6 animate-pulse"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>

                <section
                    id="features"
                    className="py-8 text-center md:py-12 lg:py-16"
                >
                    <h2
                        className="mb-4 text-2xl font-extrabold text-transparent cursor-pointer md:text-4xl bg-clip-text bg-gradient-to-r from-blue-500 via-teal-500 to-green-500"
                        onClick={handleClick}
                    >
                        Stay Tuned for New Experiences!
                    </h2>
                    {showMessage && (
                        <p className="px-4 mb-8 text-sm font-medium text-gray-700 md:text-lg md:px-0">
                            We’re crafting new features to bring a richer experience to your Quiz App.
                            From multimedia interactions to exciting new ways to engage, the journey is just beginning.
                            Keep an eye out for surprises that will elevate your experience to the next level!
                        </p>
                    )}

                    <p className="text-base text-gray-500">
                        Your adventure with our app is about to get even more interesting. Thanks for being with us!
                    </p>
                </section>
            </main>

            <footer id="footer" className="py-4 text-center text-white bg-gray-800">
                <p className="text-xs md:text-sm">Developed and Designed by Chanchal Sen</p>
                <p className="mt-1 text-xs md:text-xs">&copy; 2024 Quiz App. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
