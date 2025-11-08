import { useEffect } from "react";
import { IoMdSunny } from "react-icons/io";
import { FaRegMoon } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/theme/theme";

const DarkMode = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.isDarkMode);
  const handelTheme = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    document.body.className = theme ? "dark-mode" : "light-mode";
  }, [theme]);

  return (
    <div
      onClick={handelTheme}
      style={{ fontSize: "24px", cursor: "pointer", color: "#ddd" }}
    >
      {theme ? <IoMdSunny /> : <FaRegMoon />}
    </div>
  );
};
export default DarkMode;
