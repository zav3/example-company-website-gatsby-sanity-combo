import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Service from '../components/service'

export const query = graphql`
  query ServiceTemplateQuery($id: String!) {
    serviceData: sanityClient(id: { eq: $id }) {
      services {
        serviceType
        serviceDate 
        salesAmount
        equipment {
          equipmentUsed
        }
        lastService1 
        cardSent1 
        nextServiceDue1 
        description1 
        lastService2
        cardSent2 
        nextServiceDue2 
        description2 
        ac
        ro 
        description3
      }
    }
  }
`

const ServiceTemplate = props => {
  const { data, errors } = props
  const serviceData = data && data.serviceData
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {serviceData && <SEO title={serviceData.serviceType || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {serviceData && <Service {...serviceData} />}
    </Layout>
  )
}

export default ServiceTemplate