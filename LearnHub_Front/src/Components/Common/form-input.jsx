import { Input } from "@mui/material";

export const FormInput = ({ value,type, placeholder, name, onChange }) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={(e) => onChange(name,e.target.value)}
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
