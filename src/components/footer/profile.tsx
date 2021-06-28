import React from 'react'

import { FunctionComponent } from 'react'

import { Avatar } from '../common'

import { profile } from './styles/profile.module.css'


export const Profile: FunctionComponent = () => (
    <div className={profile}>
        <div style={{margin: "0 auto"}}><Avatar /></div>
        <div>Paweł Jankowski</div>
    </div>
)