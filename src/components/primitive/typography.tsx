import React from 'react'
import { typography, wrapper } from './typography.module.css'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
    icon?: IconDefinition
    iconColor?: string
}

export const Typography: React.FC<Props> = ({ children, icon, iconColor }) => (
    <div className={wrapper}>
        { icon && <FontAwesomeIcon icon={icon} style={{ color: iconColor || "inherit", height: "18px", width: "18px" }}/>}
        <div className={typography}>{children}</div>
    </div>
)