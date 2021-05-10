import React from 'react'
import { mobile, introductionwrapper, root } from '../../pages/style.module.css'
import { SkillTree } from '../graph'
import { Introduction } from '../introduction'
import { Trait, Project } from '../../lib'

interface Props {
    traits: Trait[]
    projects: Project[]
}

export const MobileLayout: React.FC<Props> = ({ traits, projects }) => (
    <>
        <div className={`${mobile} ${root}`}>
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