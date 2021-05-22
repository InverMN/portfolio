import React, { useState, useContext } from 'react'
import { skilltree } from './skill-tree.module.css'
import { Overlay, SkillsGraph } from './index'
import { Trait, Project } from '../../lib'
import { PagedScrollContext } from '../../contexes/paged-scroll-context'
import { GlobalOverlayContext } from '../../contexes/global-overlay-context'


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
        <div className={skilltree} style={{ zIndex: focused ? 2048 : 0 }}>
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