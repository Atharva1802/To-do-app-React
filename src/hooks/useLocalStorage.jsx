import { useState } from "react"

const useLocalStorage = (key, initialValue) => {
    try {
        const [value, setValue] = useState(() => {
            const localValue = window.localStorage.getItem(key);
            return localValue ? JSON.parse(localValue) : initialValue  
        })        
    } catch (err) { 
        console.log(err);
        return initialValue
    }
    // Error may occur in JSON parse or getting the local storage

  return (value, setValue)
}
export default useLocalStorage