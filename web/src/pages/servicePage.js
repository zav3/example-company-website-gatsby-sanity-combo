import React from 'react'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'
import { responsiveTitle1 } from '../components/typography.module.css'
import { graphql } from 'gatsby'
import ServicePreview from '../components/servicePreview'

export const query = graphql`
  query servicePageQuery {
    servicePage: allSanityClient(limit: 12, sort: { fields: [id], order: DESC }) {
      edges {
        node {
          id
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

const ServicePage = props => {
    const { data, errors } = props
    if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
    }
    const serviceNodes =
    data && data.servicePage && mapEdgesToNodes(data.servicePage).filter(filterOutDocsWithoutSlugs)
    return (
    <Layout>
      <SEO title='Services' />
      <Container>
        <h1 className={responsiveTitle1}>Services</h1>
        {serviceNodes && serviceNodes.length > 0 && <ServicePreview nodes={serviceNodes} />}
      </Container>
    </Layout>
  )
}

export default ServicePage