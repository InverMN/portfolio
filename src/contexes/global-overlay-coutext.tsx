import React from 'react'
import { GlobalOverlay } from '../components/singletons/index'

interface Props {
    enabled: boolean
    disable: () => void
    enable: () => void
}

export const GlobalOverlayContext = React.createContext<Props>(null!)

export const GlobalOverlayProvider: React.FC = ({ children }) => {
    const [enabled, setValue] = React.useState(false)

    return (
        <GlobalOverlayContext.Provider value={{
            enabled,
            disable: () => setValue(false),
            enable: () => setValue(true),
        }}>
            { enabled || <GlobalOverlay /> }
            {children}
        </GlobalOverlayContext.Provider>
    )
}