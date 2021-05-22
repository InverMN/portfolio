import React from 'react'
import { Project } from '../../../lib'
import { projectView } from './project-view.module.css'

interface Props {
    project: Project
}

export const ProjectView: React.FC<Props> = ({ project: { name } }) => (
    <div className={projectView}>
        {name}
    </div>
)