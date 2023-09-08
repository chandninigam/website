import { createContext, useState } from "react";
import Theme from "./type";

export const Theme = createContext<Theme | null>(null);

export const ThemeProvider = ({ children }: any) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  return (
    <Theme.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {children}
    </Theme.Provider>
  );
};
