import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormInput } from "../Common/form-input";
import { CodeXWithIcon } from "../Common/codeX-with-icon";
import { Button } from "../Common/button";

const VerifyOTPInput = () => {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
      toast.success("We sent an OTP to your email. Please check it.", {
        position: "top-center",
      });
    } else {
      toast.error(
        "Email not found. Please start the verification process again.",
        { position: "top-center" }
      );
    }
  }, []);

  const handleVerify = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email is required to verify OTP.", {
        position: "top-center",
      });
      return;
    }

    try {
      const response = await fetch(
        "https://quiz-app-sandy-one.vercel.app/api/auth/verify-otp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, otp }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.userId);

        toast.success("OTP verified successfully!", { position: "top-center" });
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        toast.error(
          data.message || "OTP verification failed. Please try again.",
          { position: "top-center" }
        );
      }
    } catch (error) {
      console.error("OTP verification error:", error);
      toast.error(
        "An error occurred during OTP verification. Please try again later.",
        { position: "top-center" }
      );
    }
  };

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
          Complete <br />
          OTP Verification!
        </p>

        <div className="flex flex-col gap-2 w-[45%]">
          <FormInput
            value={otp}
            type={"text"}
            placeholder={"Enter OTP"}
            name={"otp"}
            onChange={(_, value) => setOtp(value)}
          />

          <Button
            text={"Verify"}
            handleClick={handleVerify}
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
          Didn’t get the otp?{" "}
          <span className="text-[#0011CB]">Request resend!</span>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default VerifyOTPInput;
