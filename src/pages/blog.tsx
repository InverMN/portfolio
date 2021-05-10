import React, { useContext } from 'react'
import { graphql, PageProps } from 'gatsby'
import get from 'lodash/get'
import { Introduction } from '../components/introduction/index'
import { root, introductionwrapper, desktop, mobile } from './style.module.css'
import { SkillTree } from '../components/graph/index'
import { Trait, Project } from '../lib'
import PagedScroll from 'react-page-scroller'
import { ScrollContextProvider, ScrollContext } from '../contexes'
import { GlobalOverlay } from '../components/singletons/index'

class BlogIndex extends React.Component<PageProps> {
  render() {
    const traits: Trait[] = get(this, 'props.data.allContentfulTrait.nodes')
    const projects: Project[] = get(this, 'props.data.allContentfulProject.nodes')
    // const { disabled } = useContext(ScrollContext)

    return (
      <ScrollContextProvider>
        <GlobalOverlay />
        {/* Desktop */}
        <div className={`${desktop} ${root}`}>
          <div className={introductionwrapper}>
            <Introduction />
          </div>
          <SkillTree
            traitList={traits}
            projectList={projects}
          />
        </div>

        {/* Mobile */}
        <div className={`${mobile} ${root}`}>
          <ScrollContext.Consumer>
            { ({disabled}) => 
              (
                <>
                  <PagedScroll 
                    blockScrollUp={disabled}
                    blockScrollDown={disabled}
                  >
                    <div className={introductionwrapper}>
                      <Introduction />
                    </div>
                    <SkillTree
                      traitList={traits}
                      projectList={projects}
                    />
                  </PagedScroll>
                </>
              )
            }
          </ScrollContext.Consumer>
          
        </div>
      </ScrollContextProvider>
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
