export const Button = ({ text, style ,handleClick}) => {
  return (
      <button
          onClick={handleClick}
      className="text-[16px] font-semibold text-white"
          style={{
              height:'fit-content',
              
        padding: "5px 15px 5px 15px",
        borderRadius: "5px",
        background: "#000",
        boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.50)",
        ...style,
      }}
    >
      {text}
    </button>
  );
};
