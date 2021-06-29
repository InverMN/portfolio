import React from 'react'

import { FunctionComponent } from 'react'
import { PagedScrollProvider, GlobalOverlayProvider } from '../../contexes'


export const ContextCenter: FunctionComponent = ({ children }) => (
    <PagedScrollProvider>
        <GlobalOverlayProvider>
            {children}
        </GlobalOverlayProvider>
    </PagedScrollProvider>
)