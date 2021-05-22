import React from 'react'
import { Project } from '../../../lib'
import { projectsList } from './projects-list.module.css'
import { ProjectView } from './'

interface Props {
    projects: Project[]
}

export const ProjectsLists: React.FC<Props> = ({ projects }) => (
    <div className={projectsList}>
        { projects.map(it => <ProjectView project={it}/>) }
    </div>
)