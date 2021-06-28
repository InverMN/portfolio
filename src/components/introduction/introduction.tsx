import React from 'react'

import { Avatar } from '../common'

import { PersonalInfo } from '.'
import { introduction } from './styles/introduction.module.css'


export const Introduction: React.FC  = () => (
    <div className={introduction} id="introduction">
        <Avatar/>
        <PersonalInfo/>
    </div>
)