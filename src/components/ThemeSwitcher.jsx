import { useState, useEffect } from 'react'

// import global styles
import styles from './ThemeSwitcher.module.css'

// import icons
import { XMarkIcon, SunIcon, MoonIcon, SwatchIcon } from '@heroicons/react/24/outline'

// import custom hooks
import useLocalStorage from '../hooks/useLocalStorage'

const ThemeSwitcher = () => {
  const [isColorPicking, setIsColorPicking] = useState(false) // State to pick and set color 
  const defaultDark = window.matchMedia('prefers-color-scheme: dark').matches
  const [theme, setTheme] = useLocalStorage('react-todo.theme', defaultDark ? "dark" : "light")   // State to pick and set theme
  const [hue, setHue] = useLocalStorage('react-todo.color','158')    // change this hue and default accent color changes
  
  // Easiest way to handle a changing piece of State is useEffect hook
    // Here accent color picker is bought to oaction using use effec Hook

    useEffect(() => {
        document.documentElement.setAttribute('color-scheme', theme)
    }, [theme])

    useEffect(() => {
        document.documentElement.style.setProperty('--_hue', hue)
    }, [hue])


    return (
      <aside
        className={styles.wrapper}
            style={{
                backgroundColor: isColorPicking
                    ? 'hsl(var(--muted)/ .6)'
                    : 'transparent'
        }}
      > 
        {
            isColorPicking
                ? (
                <>
                    <button
                        className={`btn ${styles.close}`}
                        aria-label="close color picking mode"
                        onClick={() => setIsColorPicking(false)}
                    >
                        <XMarkIcon />
                    </button>
                            <input
                                className={styles.picker}
                                type="range"
                                min='0'
                                max='360'
                                aria-label='Change color theme slider'
                                value={hue}
                                onInput={(e) => setHue(e.target.value)}
                            />
                </>
                )
                : (
                    <div className={styles.btns}>
                            <button
                                className='btn'
                                aria-label={`change theme to 
                                ${theme === "light" ? "dark" : "light"} mode`}
                                role="switch"
                                onClick={() => setTheme(theme === "light"
                                    ? "dark"
                                    : "light")}
                            >
                            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
                        </button>
                            <button
                                className='btn'
                                aria-label='Enable color picking mode'
                                onClick={() => setIsColorPicking(true)}
                            >
                            <SwatchIcon />
                        </button>
                    </div>
                )        
        }
    </aside>
  )
}
export default ThemeSwitcher