import React, { useState, useContext } from 'react'
import { skilltree } from './skill-tree.module.css'
import { Overlay, SkillsGraph } from './index'
import { Trait, Project } from '../../lib'
import { ScrollContext } from '../../contexes/index'

interface Props {
    traitList: Trait[]
    projectList: Project[]
}

export const SkillTree: React.FC<Props> = ({ traitList, projectList }) => {
    const { disable: disableScroll } = useContext(ScrollContext)
    const [overlayVisibility, setOverlayVisibility] = useState(true)

    const hideOverlay = () => {
        setOverlayVisibility(false)
        disableScroll()
    }
    
    return (
        <div className={skilltree}>
            <SkillsGraph 
                traitList={traitList}
                projectList={projectList}
            />
            <Overlay 
                visibility={overlayVisibility}
                hide={hideOverlay}
            />
        </div>
    )
}