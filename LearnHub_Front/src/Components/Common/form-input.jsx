import { Input } from "@mui/material";

export const FormInput = ({ type, placeholder, name }) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      name={name}
      sx={{
        padding: 0.6,
        borderRadius: "5px",
        border: "2px solid #9BA3F9",
        background: "rgba(255, 253, 253, 0.50)",
        backdropFilter: blur(2),
        "&:hover:not(.Mui-disabled):before": {
          display: "block",
          borderBottom: "2px solid #353FB0",
        },
      }}
    />
  );
};
