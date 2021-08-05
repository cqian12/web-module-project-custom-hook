import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key) => {
    const [goDark, setGoDark] = useLocalStorage(key)
    return [goDark,setGoDark]
}