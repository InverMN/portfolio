import React from 'react'

import { Helmet } from 'react-helmet'


export const Fundation: React.FC = ({ children }) => (
    <>
        <Helmet >
            <meta charSet="utf-8" />
            <title>Inver Introduction</title>
            <html lang="en" />
        </Helmet>
        {children}
    </>
)