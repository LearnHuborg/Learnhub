import { IconButton, Input } from "@mui/material";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { useState } from "react";

export const FormPassword = ({ placeholder }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  return (
    <Input
      type={isPasswordVisible ? "text" : "password"}
      placeholder={placeholder}
      name="password"
      sx={{
        padding: 0.6,
        borderRadius: "5px",
        border: "2px solid #9BA3F9",
        background: "rgba(255, 253, 253, 0.50)",
        backdropFilter: blur(2),
        "&:hover:not(.Mui-disabled):before": {
          borderBottom: "2px solid #353FB0",
        },
      }}
      endAdornment={
        <IconButton
          sx={{
            width: 34,
            height: 34,
          }}
          onClick={() => setPasswordVisible(!isPasswordVisible)}
        >
          {isPasswordVisible ? <FiEyeOff /> : <FiEye />}
        </IconButton>
      }
    />
  );
};
