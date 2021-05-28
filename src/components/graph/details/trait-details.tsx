import React from 'react'

import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { AppNode } from '../../../lib'

import { ProjectsLists } from './projects-list'
import { base, traitDetails, header, logoWrapper, label, leaveButton } from './styles/trait-details.module.css'


interface Props {
    onLeave: () => void
    appNode: AppNode
}

export const TraitDetails: React.FC<Props> = ({ onLeave, appNode: { metadata, projects } }) => {
    return (
        <div className={base}>
            <div className={traitDetails}>
                <div className={header}>
                    <div>
                        <div className={logoWrapper}> <img src={metadata.logoUrl}/> </div>
                        <div className={label}> {metadata.name} </div>
                        <div className={leaveButton} onClick={onLeave}><FontAwesomeIcon icon={faTimes}/></div>
                    </div>
                    <div>{metadata.description}</div> 
                </div>
                { projects.length != 0 && <ProjectsLists projects={projects}/> }
            </div>
        </div>
    )
}