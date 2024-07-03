import React, {useRef} from 'react';
import UseEffect from "./useEffect/UseEffect";
import UseState from "./useState/UseState";
import ToggleCloseButton from "../../../../shared/Toggle/ToggleCloseButton";
import useToggle from "../../../../shared/Toggle/Toggle";
import "./Hooks.css";
import UseContext from "./useContext/UseContext";
import UseMemo from "./useMemo/UseMemo";
import UseCallback from "./useCallback/UseCallback";
import UseReducer from "./useReducer/UseReducer";
import HookButton from "../../../../shared/HookButton/HookButton";

interface HooksProps {
    closeContent: () => void;
}

const Hooks: React.FC<HooksProps> = ({closeContent}) => {
    const [showHooks, toggleHooks] = useToggle(true);
    const useStateRef = useRef<HTMLDivElement>(null);
    const useEffectRef = useRef<HTMLDivElement>(null);
    const useContextRef = useRef<HTMLDivElement>(null);
    const useMemoRef = useRef<HTMLDivElement>(null);
    const useCallbackRef = useRef<HTMLDivElement>(null);
    const useReducerRef = useRef<HTMLDivElement>(null);

    const handleClose = () => {
        toggleHooks();
        closeContent();
    };

    const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="hook-page common-page">
            <div className="hook-header common-header">
                {showHooks && <ToggleCloseButton onClick={handleClose} style={{top: "2vw"}}/>}
                <h2 className="hook-header-title">React Hooks</h2>
                <div className="hook-btn-container">
                    <HookButton text="UseState" onClick={() => scrollToRef(useStateRef)} />
                    <HookButton text="UseEffect" onClick={() => scrollToRef(useEffectRef)} />
                    <HookButton text="UseContext" onClick={() => scrollToRef(useContextRef)} />
                    <HookButton text="UseMemo" onClick={() => scrollToRef(useMemoRef)} />
                    <HookButton text="UseCallback" onClick={() => scrollToRef(useCallbackRef)} />
                    <HookButton text="UseReducer" onClick={() => scrollToRef(useReducerRef)} />
                </div>
            </div>
            <div ref={useStateRef}>
                <UseState />
            </div>
            <div ref={useEffectRef}>
                <UseEffect />
            </div>
            <div ref={useContextRef}>
                <UseContext />
            </div>
            <div ref={useMemoRef}>
                <UseMemo />
            </div>
            <div ref={useCallbackRef}>
                <UseCallback />
            </div>
            <div ref={useReducerRef}>
                <UseReducer />
            </div>
        </div>
    );
};

export default Hooks;
