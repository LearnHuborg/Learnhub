import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import QuizPage from './Components/QuizPage';
import ResultPage from './Components/ResultPage';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Layout from './Components/Layout';
import AuthRoute from './Routes/Auth';
import VerifyOTP from './Components/VerifyOtp';
import { AuthProvider } from './Context/Context';
import QuizConfig from './Components/QuizConfig';
import About from './Components/About';
import ProfilePage from "./Components/UserProfile";

const OfflineScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75">
      <div className="p-8 text-center bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-red-600">You Are Offline</h1>
        <p className="mt-2 text-gray-600">Please check your internet connection.</p>
      </div>
    </div>
  );
};

const App = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <Router>
      <AuthProvider>
        {!isOnline && <OfflineScreen />}
        <div className={isOnline ? '' : 'blur-sm'}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="/verify-otp" element={<VerifyOTP />} />
              <Route path="login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<AuthRoute component={ProfilePage} />} />
              <Route path="quiz-config" element={<AuthRoute component={QuizConfig} />} />
              <Route path="quiz" element={<AuthRoute component={QuizPage} />} />
              <Route path="result" element={<AuthRoute component={ResultPage} />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
