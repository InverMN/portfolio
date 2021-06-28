import React from 'react'

import { FunctionComponent } from 'react'

import { Copyright } from '.'
import { footer } from './styles/footer.module.css'


export const Footer: FunctionComponent = () => (
    <footer className={footer}>
        <Copyright />
    </footer>
)