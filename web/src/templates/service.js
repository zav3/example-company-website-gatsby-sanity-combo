import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Service from '../components/service'
const componentsRenderer = components => {

  return components.map(component => {
      let children = []
      if (component.children){
          children = componentsRenderer(component.children)
      }
      const element = require(`${HOME_DIR}/${component.path}`)

      return React.createElement(element, Object.assign({},{key: component.key},{...component.props}),children)
  });
}
const ServiceTemplate = props => {
  const data = props.pageContext.children
  return (
    <Layout>
      {/* {errors && <SEO title='GraphQL Error' />}
      {serviceData && <SEO title={serviceData.serviceDate || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {serviceData && <Service {...serviceData} />} */}
      {componentsRenderer(data)}
    </Layout>
  )
}

export default ServiceTemplate