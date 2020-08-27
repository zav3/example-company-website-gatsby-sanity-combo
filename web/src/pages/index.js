import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'

import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import Layout1 from '../components/layout1'

import { Link } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"

import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import Container from '../components/container'
import ProjectPreviewGrid from '../components/project-preview-grid'
import Client from '../components/client'
import ClientPreviewGrid from '../components/client-preview-grid'

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }

    projects: allSanityProject(limit: 6, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }

    posts: allSanityPost(limit: 6, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }

    clients: allSanityClient(limit: 6, sort: { fields: [name], order: DESC }) {
      edges {
        node {
          id
          name
          number
          services {
            serviceType
          }
          slug {
            current
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  const { data, errors } = props
    
    if (errors) {
        return (
            <Layout>
                <GraphQLErrorList errors={errors} />
            </Layout>
        )
  }
    const site = (data || {}).site
    const postNodes = (data || {}).posts
        ? mapEdgesToNodes(data.posts).filter(filterOutDocsWithoutSlugs)
        : []
    const projectNodes = (data || {}).projects
        ? mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)
        : []
      
    const clientNodes = (data || {}).clients
        ? mapEdgesToNodes(data.clients).filter(filterOutDocsWithoutSlugs)
        : []

    if (!site) {
        throw new Error(
        'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
        )
    }
  
  return (
    <Layout1>
    <h1>Hello {isLoggedIn() ? getUser().name : "world"}!</h1>
    <p>
      {isLoggedIn() ? (
        <>
          <Layout>
          <SEO title={site.title} description={site.description} keywords={site.keywords} />
            <Container>
                <h1 hidden>Welcome to {site.title}</h1>
                {projectNodes && (
                    <ProjectPreviewGrid
                    title='Latest projects'
                    nodes={projectNodes}
                    browseMoreHref='/projects/'
                    />
                )}
                {clientNodes && (
                  <ClientPreviewGrid
                  title ='Clients'
                  nodes={clientNodes}
                  browseMoreHref='/clients/'
                  />
                )}
                {postNodes && (
                    <BlogPostPreviewGrid
                    title='Latest blog posts'
                    nodes={postNodes}
                    browseMoreHref='/blog/'
                    />
                )}
                
            </Container>
        </Layout>
        </>
      ) : (
        <>
          You should <Link to="/app/login">log in</Link> to see restricted
          content
        </>
      )}
    </p>
  </Layout1>
  )
}

export default IndexPage