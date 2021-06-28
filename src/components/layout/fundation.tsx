import React from 'react'

import { Helmet } from 'react-helmet'

import { GlobalOverlayProvider } from '../../contexes/global-overlay-context'


export const Fundation: React.FC = ({ children }) => (
    <>
        <Helmet >
            <meta charSet="utf-8" />
            <title>Inver's Page</title>
            <html lang="en" />
        </Helmet>
        <GlobalOverlayProvider>
            {children}
        </GlobalOverlayProvider>
    </>
)