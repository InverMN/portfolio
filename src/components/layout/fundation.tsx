import React from 'react'
import { GlobalOverlayProvider } from '../../contexes/global-overlay-coutext'

export const Fundation: React.FC = ({ children }) => (
    <>
        <GlobalOverlayProvider>
            {children}
        </GlobalOverlayProvider>
    </>
)