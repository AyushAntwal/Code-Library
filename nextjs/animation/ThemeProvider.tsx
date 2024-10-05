import React, { createContext } from "react";
export const ThemeContext = createContext({
  theme: "dark",
  setTheme: (theme: string) => {}
});

export default function ThemeProvider({ children }: Readonly<{ children: React.ReactNode }>) {
    const [theme, setTheme] = React.useState("dark");
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}
