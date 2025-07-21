
'use client'
import { useState, createContext, useContext, ReactNode } from "react";

type Theme = {
    headingSize: string;
    tagColor: string;
    tagTextColor: string; 
}

const defaultTheme: Theme = {
    headingSize: '2rem',
    tagColor: '#eee',
    tagTextColor: '#333',
};

const ThemeContext = createContext<{
    theme: Theme;
    setTheme: (newTheme: Theme) => void;
}>({
    theme: defaultTheme,
    setTheme: () => {}
});

export const ThemeProvider = ({ children}: {children: ReactNode}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);
    return (
        <ThemeContext.Provider value={{ theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);