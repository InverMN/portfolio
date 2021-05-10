import React from 'react'
import { desktop, introductionwrapper, mobile, root } from '../../pages/style.module.css'
import { SkillTree } from '../graph'
import { Introduction } from '../introduction'
import { Trait, Project } from '../../lib'
import PageScroller from 'react-page-scroller'
import { Page } from './page'
import Media from 'react-media'

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
            <Media queries={{ mobile: "(max-width: 799px)", desktop: "(min-width: 800px)" }}>
                { matches => (
                    <>
                        {matches.mobile && (<><Page>{introduction}</Page> <Page>{skilltree}</Page></>)}
                        {matches.desktop && (<Page>{introduction} {skilltree}</Page>)}
                    </>
                )}
            </Media>
        </>
    )
}