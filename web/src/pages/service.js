import React from 'react'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'
import { responsiveTitle1 } from '../components/typography.module.css'
import { graphql } from 'gatsby'
import Service from '../components/service-preview-grid'

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
    data && data.service && mapEdgesToNodes(data.service)
    return (
    <Layout>
      <SEO title='Services' />
      <Container>
        <h1 className={responsiveTitle1}>Services</h1>
        {serviceNodes && serviceNodes.length > 0 && <Service nodes={serviceNodes} />}
      </Container>
    </Layout>
  )
}

export default ServicePage