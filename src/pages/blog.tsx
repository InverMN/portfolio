import React from 'react'
import { graphql, PageProps } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import styles from './blog.module.css'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import { Typography, Box } from '../components/primitive/index'
import { faAddressCard, faGhost, faTerminal, faMapMarkerAlt, faHeart } from '@fortawesome/free-solid-svg-icons'
import { PersonalInfo, Avatar, Introduction } from '../components/introduction/index'
import { root, introductionwrapper, desktop, mobile } from './style.module.css'
import { SkillsGraph } from '../components/graph/skills-graph'
import { Trait, Project } from '../lib'
import PagedScroll from 'react-page-scroller'

class BlogIndex extends React.Component<PageProps> {
  render() {
    const traits: Trait[] = get(this, 'props.data.allContentfulTrait.nodes')
    const projects: Project[] = get(this, 'props.data.allContentfulProject.nodes')

    return (
      <>
        {/* Desktop */}
        <div className={`${desktop} ${root}`}>
          <div className={introductionwrapper}>
            <Introduction />
          </div>
          <SkillsGraph
            traitList={traits}
            projectList={projects}
          />
        </div>

        {/* Mobile */}
        <div className={`${mobile} ${root}`}>
          <PagedScroll >
            <div className={introductionwrapper}>
              <Introduction />
            </div>
            <SkillsGraph
              traitList={traits}
              projectList={projects}
            />
          </PagedScroll>
        </div>
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
