import React from 'react'
import { Avatar, PersonalInfo } from './index'
import { introduction } from './introduction.module.css'

export const Introduction: React.FC  = () => (
    <div className={introduction}>
        <Avatar/>
        <PersonalInfo/>
    </div>
)