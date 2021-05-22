import React, { useContext } from 'react'
import { graphql, PageProps } from 'gatsby'
import get from 'lodash/get'
import { Introduction } from '../components/introduction/index'
import { root, introductionwrapper, desktop, mobile } from './style.module.css'
import { SkillTree } from '../components/graph/index'
import { Trait, Project } from '../lib'
import PagedScroll from 'react-page-scroller'
import { Layout } from '../components/layout/layout'

class BlogIndex extends React.Component<PageProps> {
  render() {
    const traits: Trait[] = get(this, 'props.data.allContentfulTrait.nodes')
    const projects: Project[] = get(this, 'props.data.allContentfulProject.nodes')

    return (
      <>
        <Layout 
          traits={traits}
          projects={projects}
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
        public
        repository
        previewUrl
        technologies {
          name
        }
      }
    }
  }
`
