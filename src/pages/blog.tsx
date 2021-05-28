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
          biographyChapters={["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices mauris magna, eget luctus dolor porta et. Suspendisse quis tincidunt tortor, vitae laoreet nunc. Donec vel nibh eu neque luctus viverra. Vivamus a mauris mollis, varius eros non, vestibulum ligula. Sed elementum condimentum erat, at suscipit nunc scelerisque sit amet. Curabitur vehicula eleifend massa vel congue. Praesent ultricies augue quis tellus congue, sit amet pulvinar neque elementum. In malesuada, dolor quis ultricies placerat, nibh est volutpat est, a dignissim quam nulla non turpis.", "Second", "Third", "4th"]}
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
  }
`
