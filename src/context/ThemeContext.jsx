import { createContext, useContext, useState, useEffect } from 'react';

// Create context with default value
const ThemeContext = createContext();

// Create a custom hook for using the theme context
export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

// Create provider component
export function ThemeProvider({ children }) {
    const [backgroundColor, setBackgroundColor] = useState(getComputedStyle(document.body).backgroundColor);

    // Function to change the background color
    const changeBackgroundColor = (color) => {
        document.body.style.backgroundColor = color;
        setBackgroundColor(color);
    };

    // Function to reset the background color to default
    const resetBackgroundColor = () => {
        document.body.style.backgroundColor = 'var(--color-bg)';
        setBackgroundColor('var(--color-bg)');
    };

    // Clean up function when component unmounts
    useEffect(() => {
        return () => {
            resetBackgroundColor();
        };
    }, []);

    return (
        <ThemeContext.Provider
            value={{
                backgroundColor,
                changeBackgroundColor,
                resetBackgroundColor
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}
