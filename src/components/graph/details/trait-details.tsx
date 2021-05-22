import React from 'react'
import { AppNode } from '../../../lib'
import { base, traitDetails, header, logoWrapper, label, leaveButton, description } from './trait-details.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { ProjectsLists } from './projects-list'

interface Props {
    onLeave: () => void
    appNode: AppNode
}

export const TraitDetails: React.FC<Props> = ({ onLeave, appNode }) => {
    return (
        <div className={base}>
            <div className={traitDetails}>
                <div className={header}>
                    <div>
                        <div className={logoWrapper}> <img src={appNode.graphNode.image as string}/> </div>
                        <div className={label}> {appNode.graphNode.label} </div>
                        <div className={leaveButton} onClick={onLeave}><FontAwesomeIcon icon={faTimes}/></div>
                    </div>
                    <div className={description}>Lorem ispum dolor...</div> 
                </div>
                { appNode.projects.length != 0 && <ProjectsLists projects={appNode.projects}/> }
            </div>
        </div>
    )
}