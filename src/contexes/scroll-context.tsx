import { truncate } from 'lodash'
import React, { useState } from 'react'

interface Props {
    enabled: boolean
    disable: () => void
    enable: () => void
}

export const ScrollContext = React.createContext<Props>(null!)

export const ScrollContextProvider: React.FC = ({ children }) => {
    const [enabled, setValue] = useState(true)
    return (
        <ScrollContext.Provider value={{
            enabled,
            enable: () => setValue(true),
            disable: () => setValue(false),
        }}>
            {children}
        </ScrollContext.Provider>
    )
}