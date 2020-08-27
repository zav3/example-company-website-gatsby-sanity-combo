import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'
import { responsiveTitle1 } from '../components/typography.module.css'

import ClientPreviewGrid from '../components/client-preview-grid'

export const query = graphql`
  query clientPageQuery {
    clients: allSanityClient(limit: 12, sort: { fields: [name], order: DESC }) {
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

const ClientsPage = props => {
    const { data, errors } = props
    if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
    }
    const clientNodes =
    data && data.clients && mapEdgesToNodes(data.clients).filter(filterOutDocsWithoutSlugs)
    return (
    <Layout>
      <SEO title='Clients' />
      <Container>
        <h1 className={responsiveTitle1}>Clients</h1>
        {clientNodes && clientNodes.length > 0 && <ClientPreviewGrid nodes={clientNodes} />}
      </Container>
    </Layout>
  )
}

export default ClientsPage
