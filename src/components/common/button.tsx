import React from 'react'

import { FunctionComponent } from 'react'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { button } from './styles/button.module.css'


interface Props {
    backgroundColor?: string
    linkUrl?: string
    icon?: IconDefinition
}

export const Button: FunctionComponent<Props> = ({ backgroundColor, linkUrl, icon, children }) => (
    <a className={button} style={{ backgroundColor }} href={linkUrl} target="_blank">
        { icon && <FontAwesomeIcon icon={icon}/> }
        { children }
    </a>
) 