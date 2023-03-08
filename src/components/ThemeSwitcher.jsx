import { useState } from 'react'

// import global styles
import styles from './ThemeSwitcher.module.css'

const ThemeSwitcher = () => {
  const [isColorPicking, setIsColorPicking] = useState(false)
  
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
                            
                        </button>
                        <input type="range" />
                            
                        
                    </>
                    )
                    : ()        
        }
    </aside>
  )
}
export default ThemeSwitcher