import React from 'react'

import { useState } from 'react'
import Graph from 'react-vis-network-graph'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Trait, Project, AppNode } from '../../lib'

import { options, generateAppData, events } from '.'
import { TraitDetails } from './details'
import { skillsGraph, controls } from './styles/skills-graph.module.css'


interface Props {
    traitList: Trait[]
    projectList: Project[]
    onLeave: () => void
}

export const SkillsGraph: React.FC<Props> = ({ traitList, projectList, onLeave }) => {
    const [selectedAppNode, selectAppNode]: [AppNode | undefined, React.Dispatch<React.SetStateAction<AppNode | undefined>>] = useState()
    const [appNodes, graphData] = generateAppData(traitList, projectList)

    const hideDetails = () => {
        selectAppNode(undefined)
    }

    return (
        <div className={skillsGraph}>
            <Graph
                graph={graphData}
                options={options}
                events={events(appNodes, selectAppNode)}
            />
            <div className={controls} onClick={onLeave}>
                <FontAwesomeIcon icon={faDoorOpen}/>
            </div>
            { selectedAppNode && <TraitDetails onLeave={hideDetails} appNode={selectedAppNode}/> }
        </div>
    )
}
