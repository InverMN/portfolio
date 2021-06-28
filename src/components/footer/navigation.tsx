import React from 'react'

import { FunctionComponent } from 'react'

import { title } from './styles/common.module.css'
import { navigation, links, link } from './styles/navigation.module.css'


export const Navigation: FunctionComponent = () => {
    const navigateTo = (id: string) => {
        const target = document.getElementById(id)
        target.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className={navigation}>
            <div>
                <div className={title}>Navigation</div>
                <div className={links}>
                    <div className={link} onClick={() => navigateTo('introduction')}>Introduction</div>
                    <div className={link} onClick={() => navigateTo('skills')}>Skills</div>
                    <div className={link} onClick={() => navigateTo('biography')}>Biography</div>
                </div>
            </div>
        </div>
    )
}