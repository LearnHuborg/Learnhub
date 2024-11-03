import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Components/Home/home.jsx";
import QuizPage from "./Components/Modules/Quiz/QuizPage.jsx";
import ResultPage from "./Components/Modules/Quiz/ResultPage.jsx";
import SignUp from "./Components/Other/SignUp.jsx";
import Layout from "./Components/Layouts/Layout.jsx";
import AuthRoute from "./Routes/Auth";
import VerifyOTP from "./Components/Other/VerifyOtp";
import { AuthProvider } from "./Context/Context";
import QuizConfig from "./Components/Modules/Quiz/QuizConfig";
import About from "./Components/About/About.jsx";
import ProfilePage from "./Components/Other/UserProfile";
import { LoginForm } from "./Components/forms/login-form.jsx";
import { SignUpForm } from "./Components/forms/sign-up-form.jsx";
import VerifyOTPInput from "./Components/forms/verify-otp-input.jsx";
import { SelectProfilePicture } from "./Components/profile/select-profile-picture.jsx";
import { UserProfile } from "./Components/profile/user-profile.jsx";
import { LeaderBoard } from "./Components/leaderboard/index.jsx";

const OfflineScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75">
      <div className="p-8 text-center bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-red-600">You Are Offline</h1>
        <p className="mt-2 text-gray-600">
          Please check your internet connection.
        </p>
      </div>
    </div>
  );
};

const App = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <Router>
      <AuthProvider>
        {!isOnline && <OfflineScreen />}
        <div className={isOnline ? "" : "blur-sm"}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="signup" element={<SignUpForm />} />
              <Route path="/verify-otp" element={<VerifyOTPInput />} />
              <Route path="login" element={<LoginForm />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/select-profile-pic"
                element={<SelectProfilePicture />}
              />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/leaderboard" element={<LeaderBoard />} />
              <Route
                path="quiz-config"
                element={<AuthRoute component={QuizConfig} />}
              />
              <Route path="quiz" element={<AuthRoute component={QuizPage} />} />
              <Route
                path="result"
                element={<AuthRoute component={ResultPage} />}
              />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
