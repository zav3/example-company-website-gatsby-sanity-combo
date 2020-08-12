import React from "react"

import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import Container from '../components/container'
import Layout from "../components/layout"
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import { query } from "."

 
const landingPage = props => {
    const { data, errors } = props
    
    
    if (errors) {
        return (
            <Layout>
                <GraphQLErrorList errors={errors} />
            </Layout>
        )
  }
    const site = (query.data || {}).site
    const postNodes = (query.data || {}).posts
        ? mapEdgesToNodes(query.data.posts).filter(filterOutDocsWithoutSlugs)
        : []
    const projectNodes = (query.data || {}).projects
        ? mapEdgesToNodes(query.data.projects).filter(filterOutDocsWithoutSlugs)
        : []

    if (!site) {
        throw new Error(
        'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
        )
    }
    return (
        <Layout>
        <SEO title={index.site.title} description={index.site.description} keywords={index.site.keywords} />
            <Container>
                <h1 hidden>Welcome to {index.site.title}</h1>
                {projectNodes && (
                    <ProjectPreviewGrid
                    title='Latest projects'
                    nodes={projectNodes}
                    browseMoreHref='/projects/'
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
    )
}

export default landingPage