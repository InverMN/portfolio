import React from 'react'
import { skillsgraph } from './skills-graph.module.css'
import Graph from 'react-vis-network-graph'
import { Trait, Project } from '../../lib'
import { options, generateAppData } from './index'

interface Props {
    traitList: Trait[]
    projectList: Project[]
}

export const SkillsGraph: React.FC<Props> = ({ traitList, projectList }) => {
    return (
        <div className={skillsgraph}>
            <Graph
                graph={generateAppData(traitList, projectList)}
                options={options}
            />
        </div>
    )
}
