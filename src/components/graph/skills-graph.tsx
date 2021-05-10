import React from 'react'
import { skillsgraph, inner } from './skills-graph.module.css'
import Graph from 'react-vis-network-graph'
import { Trait, Project } from '../../lib'
import { options, generateAppData } from './index'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
    traitList: Trait[]
    projectList: Project[]
    onLeave: () => void
}

export const SkillsGraph: React.FC<Props> = ({ traitList, projectList, onLeave }) => {
    return (
        <div className={skillsgraph}>
            <Graph
                graph={generateAppData(traitList, projectList)}
                options={options}
            />
            <div className={inner} onClick={onLeave}>
                <FontAwesomeIcon icon={faDoorOpen}/>
            </div>
        </div>
    )
}
