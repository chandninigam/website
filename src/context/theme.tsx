import { createContext, useState } from "react";

export const Theme = createContext({});

export const ThemeProvider = ({ children }: any) => {
  const [isDarkTheme, setDarkTheme] = useState(false);
  return (
    <Theme.Provider value={{ isDarkTheme, setDarkTheme }}>
      {children}
    </Theme.Provider>
  );
};
