import React from "react";
import { Divider } from "@mui/material";
import { CodeXWithIcon } from "../Common/codeX-with-icon";

function Header() {
  return (
    <div className="flex flex-col justify-center place-items-center gap-8 bg-transparent-white">
      <CodeXWithIcon/>

      <div className="flex flex-col gap-2">
        <p className="text-black text-center font-medium text-[36px]">
          Explore new challenges, elevate your learning <br /> with{" "}
          <span className="text-[#0011CB] text-center font-semibold text-[40px]">
            LearnHub.
          </span>
        </p>

        <div className="flex justify-evenly place-items-center">
          <Divider
            sx={{
              width: 50,
              height: 2,
              background: "rgba(0, 0, 0, 0.30)",
            }}
          />
          <p className="text-center font-medium text-sm text-black-opacity-30">
            LearnHub lets users learn, compete, and earn rewards through fun
            challenges.
          </p>
          <Divider
            sx={{
              width: 50,
              height: 2,
              background: "rgba(0, 0, 0, 0.30)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;