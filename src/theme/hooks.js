import { useTheme } from "@xstyled/styled-components";
import { strPath } from "ramdu";

export const useThemeNode = (key = "") => {
  const theme = useTheme();
  return strPath(key, theme);
};
