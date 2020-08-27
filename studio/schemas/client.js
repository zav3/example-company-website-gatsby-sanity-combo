import { number } from "prop-types"

export default {
  name: 'client',
  title: 'Client',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
       
    },
    {
      name: 'number',
      title: 'Number',
      type: 'string',
       
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the person',
      options: {
        source: 'number',
        maxLength: 96
      }
    },
    {
      name: 'services',
      title: 'Service History',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'serviceData' } }]
    }
  ],
  preview: {
    select: {
      title: 'name',
      number: 'number',
      services: 'services' 
    },
    prepare ({ title = 'No name', number }) {
      return {
        title,
        subtitle: number
          ? number
          : 'no number entered'
      }
    }
  }
}