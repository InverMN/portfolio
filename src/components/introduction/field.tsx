import React from 'react'
import { Typography, Box } from '../primitive/index'
import { field } from './field.module.css'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

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