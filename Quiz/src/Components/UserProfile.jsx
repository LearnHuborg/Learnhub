import { useEffect, useState, useContext, useMemo } from 'react';
import { AuthContext } from '../Context/Context';
import axios from 'axios';

const UserProfile = () => {
    const { userId } = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const profileResponse = await axios.get(`https://quiz-app-sandy-one.vercel.app/api/auth/userProfile/${userId}`);
                if (profileResponse.data && Array.isArray(profileResponse.data.scores)) {
                    setUserInfo(profileResponse.data);
                } else {
                    setUserInfo({ username: '', email: '', scores: [] });
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
                setUserInfo({ username: '', email: '', scores: [] });
            } finally {
                setLoading(false);
            }
        };

        if (userId) {
            fetchUserProfile();
        }
    }, [userId]);

    const totalPages = useMemo(() => Math.ceil((userInfo?.scores?.length || 0) / itemsPerPage), [userInfo, itemsPerPage]);
    const currentScores = useMemo(
        () => (userInfo?.scores?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)) || [],
        [userInfo, currentPage, itemsPerPage]
    );

    if (userInfo === null) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-300 via-pink-300 to-blue-200">
                <div className="flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
                    <p className="text-lg font-bold text-blue-700">Loading your profile...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center min-h-screen py-10 bg-gradient-to-r from-blue-200 to-purple-300">
            <div className="w-full max-w-3xl p-8 transition-all duration-500 transform bg-white rounded-lg shadow-lg hover:scale-105">
                <div className="flex flex-col items-center">
                    <img
                        src="https://i.pinimg.com/564x/30/a9/52/30a9520164af6b6e312bdc135a10af3b.jpg"
                        alt="User Avatar"
                        className="w-32 h-32 mb-4 transition-transform transform rounded-full shadow-md hover:scale-110"
                    />
                    <h1 className="text-2xl font-bold text-blue-800">{userInfo.username}</h1>
                    <p className="text-gray-700">{userInfo.email}</p>
                </div>
                <hr className="my-6 border-gray-300" />
                <h2 className="mb-4 text-xl font-semibold text-blue-800">Test History</h2>
                {currentScores.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2 lg:grid-cols-3">
                            {currentScores.map((score, index) => (
                                <div
                                    key={index}
                                    className="p-4 transition-transform duration-300 bg-gray-200 rounded-lg shadow-lg hover:scale-105 hover:bg-gray-300"
                                >
                                    <p className="text-lg font-medium text-blue-600">Quiz ID: {score.quizId}</p>
                                    <p className="text-gray-700">Score: {score.score}</p>
                                    <p className="text-sm text-gray-500">Date: {new Date(score.date).toLocaleDateString()}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center space-x-2">
                            <button
                                onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
                                disabled={currentPage === 1}
                                aria-label="Previous Page"
                                className="px-4 py-2 text-white transition-transform transform bg-blue-500 rounded-lg hover:bg-blue-600 disabled:bg-gray-300 hover:scale-105"
                            >
                                Previous
                            </button>
                            <span className="px-4 py-2 bg-gray-200 rounded-lg">{`Page ${currentPage} of ${totalPages}`}</span>
                            <button
                                onClick={() => setCurrentPage((page) => Math.min(page + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                aria-label="Next Page"
                                className="px-4 py-2 text-white transition-transform transform bg-blue-500 rounded-lg hover:bg-blue-600 disabled:bg-gray-300 hover:scale-105"
                            >
                                Next
                            </button>
                        </div>
                    </>
                ) : (
                    <p className="text-gray-500">No test history available.</p>
                )}
            </div>
        </div>
    );
};

export default UserProfile;
