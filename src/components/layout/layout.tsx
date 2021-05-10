import React from 'react'
import { desktop, introductionwrapper, mobile, root } from '../../pages/style.module.css'
import { SkillTree } from '../graph'
import { Introduction } from '../introduction'
import { Trait, Project } from '../../lib'
import { PagedScrollContext, PagedScrollProvider } from '../../contexes/paged-scroll-context'
import { Page } from './page'

interface Props {
    traits: Trait[]
    projects: Project[]
}

export const Layout: React.FC<Props> = ({ traits, projects }) => {
    const introduction = (
        <div className={introductionwrapper}>
            <Introduction />
        </div>
    )

    const skilltree = (
        <SkillTree
            traitList={traits}
            projectList={projects}
        />
    )

    return (
        <>
            <Page>
                {introduction}
                {skilltree}
            </Page>
        </>
    )
}