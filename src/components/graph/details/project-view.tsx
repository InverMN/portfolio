import React from 'react'
import { Project } from '../../../lib'
import { projectView, header, name, date, description, repo } from './project-view.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLockOpen, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

interface Props {
    project: Project
}

export const ProjectView: React.FC<Props> = ({ project: { name: nameValue, creationDate, description: {description: descriptionValue}, openSource, repositoryUrl, previewUrl } }) => (
    <div className={projectView}>
        <div className={header}>
            <div className={name}>
                { previewUrl ? <a href={previewUrl} target="_blank">{nameValue} <FontAwesomeIcon icon={faExternalLinkAlt}/></a> : <a>{nameValue}</a> }
            </div>
            <div className={date}>{creationDate}</div>
        </div>
        {/* TODO show link anchor next to name and redirect to preview url*/}
        <div className={description}>{descriptionValue}</div>
        { openSource && <div className={repo}><a href={repositoryUrl} target="_blank"><FontAwesomeIcon icon={faExternalLinkAlt}/> Open-source</a></div> }
    </div>
)