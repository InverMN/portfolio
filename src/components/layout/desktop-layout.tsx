import React from 'react'
import { desktop, introductionwrapper, root } from '../../pages/style.module.css'
import { SkillTree } from '../graph'
import { Introduction } from '../introduction'
import { Trait, Project } from '../../lib'

interface Props {
    traits: Trait[]
    projects: Project[]
}

export const DesktopLayout: React.FC<Props> = ({ traits, projects }) => (
    <>
        <div className={`${desktop} ${root}`}>
            <div className={introductionwrapper}>
                <Introduction />
            </div>
            <SkillTree
                traitList={traits}
                projectList={projects}
            />
        </div>
    </>
)