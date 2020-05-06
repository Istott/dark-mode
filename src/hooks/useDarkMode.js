import { useEffect } from "react";
import { useLocalStorage } from './useLocalStorage'


export const useDarkMode = (key, initialValue) => {
    const [someValue, setSomeValue] = useLocalStorage(key, initialValue);

    useEffect(() => {
        setSomeValue(someValue === true ? body.classList.add('dark-mode') : body.classList.remove('dark-mode'))

    }, [someValue])

    return [someValue, setSomeValue];
};

