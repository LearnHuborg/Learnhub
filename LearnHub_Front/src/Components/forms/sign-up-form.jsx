import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Common/button";
import { CodeXWithIcon } from "../Common/codeX-with-icon";
import { FormInput } from "../Common/form-input";
import { FormPassword } from "../Common/form-password";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Context/Context";
import { useContext, useState } from "react";

export const SignUpForm = () => {
  const navigate = useNavigate();
  const [signUpCredentials, setSignUpCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { login } = useContext(AuthContext);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [loading, setLoading] = useState(false);

  const validatePassword = (password) => {
    const hasNumber = /\d/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
    const isValidLength = password.length >= 8;
    let strength = "";

    if (
      isValidLength &&
      hasNumber.test(password) &&
      hasSpecialChar.test(password)
    ) {
      strength = "strong";
    } else if (
      isValidLength &&
      (hasNumber.test(password) || hasSpecialChar.test(password))
    ) {
      strength = "medium";
    } else {
      strength = "weak";
    }

    setPasswordStrength(strength);
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (signUpCredentials.password !== signUpCredentials.confirmPassword) {
      toast.error("Passwords do not match!", { position: "top-center" });
      return;
    }

    if (passwordStrength === "weak") {
      toast.error(
        "Password is too weak. It must be at least 8 characters long and contain a number and a special character.",
        { position: "top-center" }
      );
      return;
    }

    setLoading(true);
    const username = signUpCredentials.name;
    const password = signUpCredentials.password;
    const email = signUpCredentials.email;

    try {
      const response = await fetch(
        "https://quiz-app-sandy-one.vercel.app/api/auth/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password, email }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        login(data.token, username, email);
        setTimeout(() => {
          navigate("/verify-otp");
        }, 500);
      } else {
        toast.error(data.message || "Signup failed. Please try again.", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("An error occurred during signup. Please try again later.", {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (type, value) => {
    if (type === "password") {
      validatePassword(value);
    }
    setSignUpCredentials((prev) => {
      const updatedData = { ...prev };
      updatedData[type] = value;
      return updatedData;
    });
  };
  return (
    <div className="flex flex-col gap-5 justify-center place-items-center">
      <CodeXWithIcon />
      <div
        className="w-[50%] h-[72vh] rounded-[5px] flex flex-col gap-8 justify-center place-items-center"
        style={{
          background: "rgba(255, 255, 255, 0.25)",
          backdropFilter: blur(2),
        }}
      >
        <p className="text-[32px] text-center font-medium text-black ">
          Create a new <br />
          account!
        </p>

        <div className="flex flex-col gap-2 w-[45%]">
          <FormInput
            value={signUpCredentials.name}
            type={"text"}
            placeholder={"Name"}
            name={"name"}
            onChange={handleChange}
          />

          <FormInput
            value={signUpCredentials.email}
            type={"email"}
            placeholder={"Email"}
            name={"email"}
            onChange={handleChange}
          />

          <FormPassword
            value={signUpCredentials.password}
            placeholder={"Create Password"}
            onChange={handleChange}
          />

          {signUpCredentials.password && (
            <div className="text-sm">
              Password Strength:{" "}
              <span
                className={`font-bold ${
                  passwordStrength === "strong"
                    ? "text-green-500"
                    : passwordStrength === "medium"
                    ? "text-yellow-500"
                    : "text-red-500"
                }`}
              >
                {passwordStrength.charAt(0).toUpperCase() +
                  passwordStrength.slice(1)}
              </span>
            </div>
          )}

          <FormInput
            value={signUpCredentials.confirmPassword}
            type={"text"}
            placeholder={"Confirm Password"}
            name={"confirmPassword"}
            onChange={handleChange}
          />

          <Button
            text={loading ? "Signing Up..." : "Sign Up"}
            type={"submit"}
            handleClick={handleSignup}
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
          Already have an account?{" "}
          <Link to={"/login"} className="text-[#0011CB]">
            Login!
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};
