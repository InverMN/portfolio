import React, { useContext } from 'react'
import { graphql, PageProps } from 'gatsby'
import get from 'lodash/get'
import { Introduction } from '../components/introduction/index'
import { root, introductionwrapper, desktop, mobile } from './style.module.css'
import { SkillTree } from '../components/graph/index'
import { Trait, Project } from '../lib'
import { Layout } from '../components/layout/layout'

class BlogIndex extends React.Component<PageProps> {
  render() {
    const traits: Trait[] = get(this, 'props.data.allContentfulTrait.nodes')
    const projects: Project[] = get(this, 'props.data.allContentfulProject.nodes')
    const preProcessedBiographyChapters: {content: { content: string }}[] = get(this, 'props.data.allContentfulBiographyChapter.nodes')
    const biographyChapters = preProcessedBiographyChapters.flatMap(it => it.content.content)

    return (
      <>
        <Layout 
          traits={traits}
          projects={projects}
          biographyChapters={biographyChapters.reverse()}
        />
      </>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query TraitQuery {
    allContentfulTrait {
      nodes {
        name
        contentfulparent {
          name
        }
        logo {
          file {
            url
          }
        }
        desc {
          desc
        }
      }
    }
    allContentfulProject {
      nodes {
        name
        description {
          description
        }
        creationDate
        openSource
        repositoryUrl
        previewUrl
        technologies {
          name
        }
      }
    }
    allContentfulBiographyChapter {
			nodes {
				content {
					content
        }
      }
    }
  }
`
