import { createContext, useEffect, useState } from "react";
import { lightTheme, darkTheme } from "../../theme";

export const ThemeContext = createContext();

export function Providers({children}) {
    const [theme, setTheme] = useState(lightTheme);
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === lightTheme ? darkTheme : lightTheme);
    };

    useEffect(() => {
        const root = document.documentElement;
        for (const key in theme) {
          root.style.setProperty(key, theme[key]);
        }
      }, [theme]);

    return(
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
    )
}