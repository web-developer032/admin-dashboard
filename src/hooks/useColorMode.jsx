import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import { getUserDefinedTheme, setDefaultColorTheme } from "../lib/utils";

const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage(
    "color-theme",
    getUserDefinedTheme(),
  );

  useEffect(() => {
    setDefaultColorTheme(colorMode);
    setColorMode(colorMode);
  }, [colorMode, setColorMode]);

  return [colorMode, setColorMode];
};

export default useColorMode;
