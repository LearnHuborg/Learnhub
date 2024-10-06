import { Link } from "react-router-dom";
import { Button } from "../Common/button";
import { CodeXWithIcon } from "../Common/codeX-with-icon";
import { FormInput } from "../Common/form-input";
import { FormPassword } from "../Common/form-password";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Context/Context';


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
      const response = await fetch('https://quiz-app-sandy-one.vercel.app/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
          const errorData = await response.json();
          toast.error(errorData.message || 'User Not Found. Please Sign Up.');
          setTimeout(() => {
              navigate('/signup');
          }, 3000);
          return;
      }

      const data = await response.json();
      login(data.token, data.username, data.email, data.userId);
      navigate('/');

  } catch (error) {
      toast.error('Login failed: ' + error.message);
  }
};

export const LoginForm = () => {
  return (
    <div className="flex flex-col gap-5 justify-center place-items-center">
      <CodeXWithIcon />
      <div
        className="w-[50%] h-[59vh] rounded-[5px] flex flex-col gap-8 justify-center place-items-center"
        style={{
          background: "rgba(255, 255, 255, 0.25)",
          backdropFilter: blur(2),
        }}
      >
        <p className="text-[32px] text-center font-medium text-black ">
          Login to your <br /> account!
        </p>

        <div className="flex flex-col gap-2 w-[45%]">
          <FormInput type={"text"} placeholder={"username"} name={"username"} />
          <FormPassword placeholder={"password"} />

          <Button
            text={"Login"}
            handleClick={handleSubmit}
            style={{
              paddingTop: "8px",
              paddingBottom: "8px",
              width: "100%",
              fontSize: "22px",
              fontWeight: 600,
            }}
          />
        </div>
        <p className="text-[16px] font-normal text-black">
          Don’t have an account?{" "}
          <Link to={"/signup"} className="text-[#0011CB]">
            Sign up!
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};
