import React, { useState } from 'react'
import { options, generateAppData, events } from './'
import { skillsGraph, controls } from './skills-graph.module.css'
import Graph from 'react-vis-network-graph'
import { Trait, Project, AppNode } from '../../lib'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TraitDetails } from './details'

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
