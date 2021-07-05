import React from 'react'

import { graphql, PageProps } from 'gatsby'
import get from 'lodash/get'

import { Trait, Project } from '../lib'
import { Layout, ContextCenter } from '../components/layout'

import './global.css'


class BlogIndex extends React.Component<PageProps> {
    render(): JSX.Element {
        const traits: Trait[] = get(this, 'props.data.allContentfulTrait.nodes')
        const projects: Project[] = get(this, 'props.data.allContentfulProject.nodes')
        const preProcessedBiographyChapters: {content: { content: string }}[] = get(this, 'props.data.allContentfulBiographyChapter.nodes')
        const biographyChapters = preProcessedBiographyChapters.flatMap(it => it.content.content)

        return (
            <ContextCenter>
                <Layout 
                    traits={traits}
                    projects={projects}
                    biographyChapters={biographyChapters.reverse()}
                />
            </ContextCenter>
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
