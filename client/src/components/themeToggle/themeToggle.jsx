import {FaMoon, FaSun} from 'react-icons/fa6';
import "./themeToggle.css";
import { ThemeContext } from './themeProvider';
import { useContext, useEffect, useState} from 'react';
import { lightTheme } from '../../theme';

export default function ThemeToggle() {
    const {theme, toggleTheme } = useContext(ThemeContext);
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
        setMounted(true);
    }, []);
    
    if (!mounted) {
        return null;
    }

    function changeIcon() {
        toggleTheme();
    }

    return(
        <button className='icon' onClick={changeIcon}>
            {(theme === lightTheme) ? <FaMoon className='moon'/> : <FaSun className='sun'/>}
        </button>
    );
}