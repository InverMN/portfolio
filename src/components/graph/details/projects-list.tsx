import React from 'react'

import { Project } from '../../../lib'

import { ProjectView } from '.'
import { projectsList } from './styles/projects-list.module.css'


interface Props {
    projects: Project[]
}

export const ProjectsLists: React.FC<Props> = ({ projects }) => (
    <div className={projectsList}>
        { projects.map(it => <ProjectView project={it} key={it.name}/>) }
    </div>
)