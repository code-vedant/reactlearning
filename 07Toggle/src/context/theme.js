import {createContext , useContext} from 'react'

export const ThemeCtxt = createContext({
    themeMode: "Light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeCtxt.Provider

export default function useTheme(){
    return useContext(ThemeCtxt)
}