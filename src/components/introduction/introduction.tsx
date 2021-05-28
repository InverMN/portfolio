import React from 'react'

import { Avatar, PersonalInfo } from '.'
import { introduction } from './styles/introduction.module.css'


export const Introduction: React.FC  = () => (
    <div className={introduction}>
        <Avatar/>
        <PersonalInfo/>
    </div>
)