import React from 'react'

import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

import { Typography, Box } from '../primitive'

import { field } from './styles/field.module.css'


interface Props {
    icon: IconDefinition
    iconColor?: string 
}

export const Field: React.FC<Props> = ({ children, icon, iconColor }) => (
    <div className={field}>
        <Box shape="circle">
            <Typography icon={icon} iconColor={iconColor}>{children}</Typography>
        </Box>
    </div>
)