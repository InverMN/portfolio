import React from 'react'

import { FunctionComponent } from 'react'

import { Avatar } from '../common'

import { title } from './styles/common.module.css'
import { profile } from './styles/profile.module.css'


export const Profile: FunctionComponent = () => (
    <div className={profile}>
        <div className={title}>PORTFOLIO</div>
        <Avatar />
        <div>Paweł Jankowski</div>
    </div>
)