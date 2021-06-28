import React, { useState, useContext } from 'react'

import { PagedScrollContext, GlobalOverlayContext } from '../../contexes'
import { Trait, Project } from '../../lib'

import { Overlay, SkillsGraph } from '.'
import { skilltree } from './styles/skill-tree.module.css'


interface Props {
    traitList: Trait[]
    projectList: Project[]
}

export const SkillTree: React.FC<Props> = ({ traitList, projectList }) => {
    const { disable: disableScroll, enable: enableScroll } = useContext(PagedScrollContext)
    const { disable: disableOverlay, enable: enableOverlay } = useContext(GlobalOverlayContext)
    const [overlayVisibility, setOverlayVisibility] = useState(true)
    const [focused, setFocused] = useState(false)

    const hideOverlay = () => {
        setOverlayVisibility(false)
        enableOverlay()
        disableScroll()
        setFocused(true)
    }

    const showOverlay = () => {
        setOverlayVisibility(true)
        disableOverlay()
        enableScroll()
        setFocused(false)
    }
    
    return (
        <div className={skilltree} style={{ zIndex: focused ? 2048 : 0 }} id="skills">
            <SkillsGraph 
                traitList={traitList}
                projectList={projectList}
                onLeave={showOverlay}
            />
            <Overlay 
                visibility={overlayVisibility}
                hide={hideOverlay}
            />
        </div>
    )
}