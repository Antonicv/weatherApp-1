// themeContext.jsx
import React, { createContext, useState, useMemo, useEffect } from 'react';
import { createTheme } from '@mui/material/styles';

// Definir los temas claro y oscuro
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2A3F5F', // Azul marino oscuro (elegante y profesional)
      light: '#3D5675',
      dark: '#1A2A40',
    },
    secondary: {
      main: '#7A4F6B', // Borgoña suave (toque sofisticado)
      light: '#8C637D',
      dark: '#683B56',
    },
    background: {
      default: '#F8F9FA', // Blanco ligeramente cálido
      paper: '#E9ECEF',   // Gris muy claro neutro
    },
    text: {
      primary: '#212529',  // Negro suave
      secondary: '#495057', // Gris medio
    },
    divider: '#CED4DA',    // Líneas sutiles
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6AB7C6', // Verde azulado suave (moderno y fresco)
      light: '#8ECCD6',
      dark: '#4A9DAB',
    },
    secondary: {
      main: '#C77D8E', // Coral apagado (contraste elegante)
      light: '#D897A5',
      dark: '#B05D71',
    },
    background: {
      default: '#0A1929',  // Azul noche profundo
      paper: '#172B4D',    // Azul oscuro con profundidad
    },
    text: {
      primary: '#E9ECEF',   // Blanco cálido
      secondary: '#ADB5BD', // Gris medio claro
    },
    divider: '#2C3E5A',    // Líneas de contraste suave
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
  },
});
// Crear el contexto del tema
export const ThemeContext = createContext();

// Proveedor del tema
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  const theme = useMemo(() => (isDarkMode ? darkTheme : lightTheme), [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};