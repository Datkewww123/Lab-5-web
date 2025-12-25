import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function ThemedButton() {
  const theme = useContext(ThemeContext);

  return (
    <button className={`button-${theme}`}>
      Theme Button ({theme})
    </button>
  );
}

export default ThemedButton;
