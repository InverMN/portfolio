import React from 'react'

import { GlobalOverlayProvider } from '../../contexes/global-overlay-context'


export const Fundation: React.FC = ({ children }) => (
    <>
        <GlobalOverlayProvider>
            {children}
        </GlobalOverlayProvider>
    </>
)