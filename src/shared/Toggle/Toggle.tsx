import {useState} from "react";

const useToggle = (initialState = false) => {
    const [isVisible, setIsVisible] = useState(initialState);

    const toggle = () => {
        setIsVisible(prevState => !prevState);
    }

    return [isVisible, toggle] as const;
};

export default useToggle;