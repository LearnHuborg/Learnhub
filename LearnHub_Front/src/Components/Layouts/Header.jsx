import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/Context";
import { Button } from "../Common/button";

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/home");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="p-4  flex justify-between place-items-center"
      style={{
        background: "rgba(255, 255, 255, 0.2)",
        backdropFilter: blur("4px"),
      }}
    >
      <p
        className="text-[36px] font-bold text-[#000] cursor-pointer"
        onClick={() => navigate("/")}
      >
        LearnHub
      </p>

      <div className="flex gap-5">
        {isAuthenticated ? (
          <>
            <Button text={"Profile"} handleClick={() => navigate("/profile")} />

            <Button text={"Log out"} handleClick={handleLogout} />
          </>
        ) : (
          <>
            <Button text={"Login"} handleClick={() => navigate("/login")} />

            <Button text={"Sign Up"} handleClick={() => navigate("/signup")} />
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
