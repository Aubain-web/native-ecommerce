import {createContext, useContext, useState} from "react";

export type ClickContextType = {
    clickCount: number,
    setClickCount?: (value: number) => void
}

export const ClickContext = createContext<ClickContextType>({
    clickCount: 0
});

export const ClickProvider = ({children}: { children: React.JSX.Element }): React.JSX.Element => {
    const [clickCount, setClickCount] = useState(0);

    function increment() {
        setClickCount(clickCount + 1);
    }

    const value: ClickContextType = {
        clickCount,
        setClickCount: increment
    };

    return (
        <ClickContext.Provider value={value}>
            {children}
        </ClickContext.Provider>
    );
}

export const useClick = (): ClickContextType => {
    return useContext(ClickContext);
}
