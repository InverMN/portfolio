import React, { useState, useContext } from 'react'
import { skilltree } from './skill-tree.module.css'
import { Overlay, SkillsGraph } from './index'
import { Trait, Project } from '../../lib'
import { PagedScrollContext } from '../../contexes/paged-scroll-context'


interface Props {
    traitList: Trait[]
    projectList: Project[]
}

export const SkillTree: React.FC<Props> = ({ traitList, projectList }) => {
    const { disable: disableScroll, enable: enableScroll } = useContext(PagedScrollContext)
    const [overlayVisibility, setOverlayVisibility] = useState(true)

    const hideOverlay = () => {
        setOverlayVisibility(false)
        disableScroll()
    }

    const showOverlay = () => {
        setOverlayVisibility(true)
        enableScroll()
    }
    
    return (
        <div className={skilltree}>
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