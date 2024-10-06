import { Link } from "react-router-dom";
import { Button } from "../Common/button";
import { CodeXWithIcon } from "../Common/codeX-with-icon";
import { FormInput } from "../Common/form-input";
import { FormPassword } from "../Common/form-password";

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
    </div>
  );
};
