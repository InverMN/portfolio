import React from 'react'


interface Props {
    enabled: boolean
    enable: () => void
    disable: () => void
}

const defaultPayload = {
    enabled: true,
    enable: () => {},
    disable: () => {},
}

export const PagedScrollContext = React.createContext<Props>(defaultPayload)

export const PagedScrollProvider: React.FC = ({ children }) => {
    const [enabled, setValue] = React.useState(true)

    return (
        <PagedScrollContext.Provider value={{
            enabled,
            enable: () => setValue(true),
            disable: () => setValue(false),
        }}>
            {children}
        </PagedScrollContext.Provider>
    )
}