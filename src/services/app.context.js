import React, { useState } from "react";

const AppStateContext = React.createContext(null)

export const AppStateProvider = ({appState: currentState, children}) => {
    const [appState, setAppState] = useState(currentState);

    return (
        <AppStateContext.Provider value={{appState, setAppState}}>
            {children}
        </AppStateContext.Provider>
    )
}

export const useAppContext = () => React.useContext(AppStateContext)