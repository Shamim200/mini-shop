import { useEffect } from "react";
import { IoMdSunny } from "react-icons/io";
import { FaRegMoon } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/theme/theme";
// import { Button } from "react-bootstrap";

const DarkMode = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.isDarkMode);
  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    document.body.className = theme ? "dark-mode" : "light-mode";
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => handleTheme()}
      className="btn btn-dark mx-2 cursor-pointer"
      style={{ fontSize: "20px", color: "#ddd" }}
    >
      {theme ? <IoMdSunny /> : <FaRegMoon />}
    </button>
  );
};
export default DarkMode;
