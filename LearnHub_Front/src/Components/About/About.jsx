import { FaLinkedin, FaGithub, FaEnvelope, FaCode } from 'react-icons/fa';
import { TbBrandLeetcode } from "react-icons/tb";

const About = () => {
    return (
        <div className="max-w-4xl p-6 mx-auto mt-8 transition-transform transform bg-white border border-gray-200 rounded-lg shadow-lg md:p-8 hover:scale-105 hover:shadow-2xl">
            <section className="mb-8">
                <h1 className="mb-6 text-3xl font-extrabold text-gray-800 md:text-4xl animate-fadeIn">
                    About This Website
                </h1>

                <section className="mb-6">
                    <h2 className="mb-2 text-xl font-semibold text-gray-700 md:text-2xl animate-fadeIn">
                        Tech Stack
                    </h2>
                    <p className="text-base md:text-gray-600 animate-fadeIn">
                        This website is built using modern web technologies to ensure a fast and responsive user experience. Below are some of the key technologies used:
                    </p>
                    <ul className="ml-4 text-base list-disc md:text-gray-600 animate-fadeIn">
                        <li>Frontend: React, Tailwind CSS</li>
                        <li>Backend: Node.js, Express</li>
                        <li>Database: MongoDB Atlas</li>
                        <li>Version Control: Git, GitHub</li>
                        <li>Hosting: Vercel/Netlify</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="mb-2 text-xl font-semibold text-gray-700 md:text-2xl animate-fadeIn">
                        Website Features & Functionality
                    </h2>
                    <p className="text-base md:text-gray-600 animate-fadeIn">
                        The website offers a seamless quiz-taking experience with features like:
                    </p>
                    <ul className="ml-4 text-base list-disc md:text-gray-600 animate-fadeIn">
                        <li>User Authentication (Login/Signup)</li>
                        <li>Quiz Attempt History</li>
                        <li>Real-time Quiz Timer</li>
                        <li>Animated Progress Tracking</li>
                        <li>Responsive Design for mobile and desktop</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="mb-2 text-xl font-semibold text-gray-700 md:text-2xl animate-fadeIn">
                        Database Structure
                    </h2>
                    <p className="text-base md:text-gray-600 animate-fadeIn">
                        Our database is structured to ensure data integrity and efficient access. We use MongoDB Atlas for its flexibility and scalability. Key collections include:
                    </p>
                    <ul className="ml-4 text-base list-disc md:text-gray-600 animate-fadeIn">
                        <li>Users: Stores user information and authentication details.</li>
                        <li>Questions: Contains questions and answers for quizzes.</li>
                        <li>Results: Tracks user quiz attempts and scores.</li>
                    </ul>
                </section>
            </section>

            <section className="mb-8">
                <h1 className="mb-6 text-3xl font-extrabold text-gray-800 md:text-4xl animate-slideInRight">
                    About the Developer
                </h1>

                <section className="mb-6">
                    <h2 className="mb-2 text-xl font-semibold text-gray-700 md:text-2xl animate-slideInRight">
                        Chanchal Sen
                    </h2>
                    <p className="text-base md:text-gray-600 animate-slideInRight">
                        Hello! I am Chanchal Sen, a passionate Full Stack Developer specializing in the MERN stack. I have experience in building scalable, maintainable applications with a strong focus on user experience and performance.
                    </p>
                    <p className="text-base md:text-gray-600 animate-slideInRight">
                        Connect with me:
                    </p>
                    <div className="flex flex-wrap gap-6 mt-4 animate-slideInRight">
                        <a href="https://www.linkedin.com/in/chanchal09/" target="_blank" rel="noopener noreferrer" className="text-blue-600 transition-transform transform hover:text-blue-800 hover:scale-110">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://github.com/ChanchalSen09" target="_blank" rel="noopener noreferrer" className="text-gray-800 transition-transform transform hover:text-gray-900 hover:scale-110">
                            <FaGithub size={24} />
                        </a>
                        <a href="mailto:bkchanchalsen@gmail.com" className="text-red-500 transition-transform transform hover:text-red-700 hover:scale-110">
                            <FaEnvelope size={24} />
                        </a>
                        <a href="https://auth.geeksforgeeks.org/user/chanchal_sen09" target="_blank" rel="noopener noreferrer" className="text-green-600 transition-transform transform hover:text-green-700 hover:scale-110">
                            <FaCode size={24} />
                        </a>
                        <a href="https://leetcode.com/u/Chanchalsen09/" target="_blank" rel="noopener noreferrer" className="text-black transition-transform transform hover:text-pink-700 hover:scale-110">
                            <TbBrandLeetcode size={24} />
                        </a>
                    </div>
                </section>

                <section className="mb-6">
                    <h2 className="mb-2 text-xl font-semibold text-gray-700 md:text-2xl animate-slideInRight">
                        Experience
                    </h2>
                    <p className="text-base md:text-gray-600 animate-slideInRight">
                        Software Developer at DAPS Software Pvt. Limited
                    </p>
                    <ul className="ml-4 text-base list-disc md:text-gray-600 animate-slideInRight">
                        <li>Developed complex SQL queries for data manipulation and analysis.</li>
                        <li>Optimized database schemas to improve performance.</li>
                        <li>Created backend services and APIs integrated with front-end interfaces.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="mb-2 text-xl font-semibold text-gray-700 md:text-2xl animate-slideInRight">
                        Technical Skills
                    </h2>
                    <ul className="ml-4 text-base list-disc md:text-gray-600 animate-slideInRight">
                        <li>Languages: SQL, C++, JavaScript, Python</li>
                        <li>Frontend: HTML, CSS, JavaScript, ReactJS, Redux, Tailwind CSS</li>
                        <li>Backend: NodeJS, ExpressJS</li>
                        <li>Database: MS SQL Server, MongoDB</li>
                    </ul>
                </section>
            </section>
        </div>
    );
};

export default About;
