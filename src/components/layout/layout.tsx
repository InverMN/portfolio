import React from 'react'

import Media from 'react-media'

import { Biography } from '../biography'
import { Footer } from '../footer'
import { SkillTree } from '../graph'
import { Introduction } from '../introduction'
import { Trait, Project } from '../../lib'

import { Fundation, Page } from '.'
import { introductionWrapper, layout } from './styles/layout.module.css'


interface Props {
    traits: Trait[]
    projects: Project[]
    biographyChapters: string[]
}

export const Layout: React.FC<Props> = ({ traits, projects, biographyChapters }) => {
    const introduction = (
        <div className={introductionWrapper}>
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
        <Fundation>
            <div className={layout}>
                <Media queries={{ mobile: "(max-width: 799px)", desktop: "(min-width: 800px)" }}>
                    { matches => (
                        <>
                            {matches.mobile && (<><Page>{introduction}</Page> <Page>{skilltree}</Page> <Page><Biography chapters={biographyChapters}/></Page> <Page><Footer /></Page></>)}
                            {matches.desktop && (<><Page>{introduction} {skilltree}</Page> <br/> <Page><Biography chapters={biographyChapters}/></Page> <Page><Footer /></Page></>)}
                        </>
                    )}
                </Media>
            </div>
        </Fundation>
    )
}