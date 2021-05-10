import React, { useState } from 'react'

interface Props {
    disabled: boolean
    disable: () => void
    enable: () => void
}

export const ScrollContext = React.createContext<Props>(null!)

export const ScrollContextProvider: React.FC = ({ children }) => {
    const [disabled, setValue] = useState(false)
    return (
        <ScrollContext.Provider value={{
            disabled,
            disable: () => setValue(true),
            enable: () => setValue(false),
        }}>
            {children}
        </ScrollContext.Provider>
    )
}