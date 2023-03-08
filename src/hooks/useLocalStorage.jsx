import { useEffect, useState } from "react"

const useLocalStorage = (key, initialValue) => {
    try {
        const [value, setValue] = useState(() => {
            const localValue = window.localStorage.getItem(key);       // Gett item key and store to Local storge for reference
            return localValue ? JSON.parse(localValue) : initialValue  // Only parse when key is found 
        })        
    } catch (err) { 
        console.log(err);
        return initialValue
    }
    // Error may occur in JSON parse or getting the local storage

    useEffect(() => {
        window.localStorage.setItem(kwy, JSON.stringify(value))
        //Converts a JavaScript value to a JavaScript Object Notation (JSON) string
    }, [key, value])    //whenever value changes, tey block updates and sets the new value to initial value
  return (value, setValue)
}
export default useLocalStorage