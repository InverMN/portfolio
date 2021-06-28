import React from 'react'

import { FunctionComponent } from 'react'

import { Copyright, Profile, Navigation } from '.'
import { footer } from './styles/footer.module.css'


export const Footer: FunctionComponent = () => (
    <footer className={footer}>
        <Profile />
        <Navigation />
        <Copyright />
    </footer>
)