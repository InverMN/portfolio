import React from 'react'

interface Props {
    enabled: boolean
    disable: () => void
    enable: () => void
}

export const GlobalOverlayContext = React.createContext<Props>(null!)

export const GlobalOverlayContextProvider: React.FC = ({ children }) => {
    const [enabled, setValue] = React.useState(false)

    return (
        <GlobalOverlayContext.Provider value={{
            enabled,
            disable: () => setValue(false),
            enable: () => setValue(true),
        }}>
            {children}
        </GlobalOverlayContext.Provider>
    )
}