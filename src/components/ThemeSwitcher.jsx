import { useState } from 'react'

// import global styles
import styles from './ThemeSwitcher.module.css'

// import icons
import { XMarkIcon, SunIcon, MoonIcon, SwatchIcon } from '@heroicons/react/24/outline'

const ThemeSwitcher = () => {
  const [isColorPicking, setIsColorPicking] = useState(false)
  const [theme, setTheme] = useState('light')
  const handleThemeBtn = () => setTheme(theme === "light" ? "dark" : "light")
  
    return (
      <aside
        className={styles.wrapper}
        //style
      > 
        {
            isColorPicking
                ? (
                <>
                    <button>
                        a            
                    </button>
                    <input type="range" />
                        
                    
                </>
                )
                : (
                    <div className={styles.btns}>
                            <button
                                className='btn'
                                aria-label={`change theme to 
                                ${theme === "light" ? "dark" : "light"} mode`}
                                role="switch"
                                onClick={handleThemeBtn}
                            >
                            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
                        </button>
                            <button
                                className='btn'
                                aria-label='Enable color picking mode'
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