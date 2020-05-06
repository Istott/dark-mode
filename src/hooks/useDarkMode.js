import { useEffect } from "react";
import { useLocalStorage } from './useLocalStorage'


export const useDarkMode = (key, initialValue) => {
    const [someValue, setSomeValue] = useLocalStorage(key, initialValue);

    useEffect(() => {
        someValue ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')

    }, [someValue])

    return [someValue, setSomeValue];
};

