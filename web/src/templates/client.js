import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Client from '../components/client'

export const query = graphql`
  query ClientTemplateQuery($id: String!) {
    client: sanityClient(id: { eq: $id }) {
      id
      lastName
      firstName
      phoneNumber1
      phoneNumber2
      email
      address
      subdivision
      city
      zipcode
      services {
        serviceType
      }
      slug {
        current
      }
    }
  }
`

const ClientTemplate = props => {
  const { data, errors } = props
  const client = data && data.client
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {client && <SEO title={client.lastName || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {client && <Client {...client} />}
    </Layout>
  )
}

export default ClientTemplate