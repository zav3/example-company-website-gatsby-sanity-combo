import serviceData from "./serviceData"

export default {
  name: 'client',
  title: 'Client',
  type: 'document',
  fields: [
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
       
    },
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
       
    },
    {
      name: 'phoneNumber1',
      title: 'Phone #1',
      type: 'string',
       
    },
    {
      name: 'phoneNumber2',
      title: 'Phone #2',
      type: 'string',
       
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
       
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
       
    },
    {
      name: 'subdivision',
      title: 'Subdivision',
      type: 'string',
       
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
       
    },
    {
      name: 'zipcode',
      title: 'Zipcode',
      type: 'string',
       
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the person',
      options: {
        source: 'email',
        maxLength: 96
      }
    },
    {
      name: 'services',
      title: 'Service History',
      type: 'array',
      of: [{ type: 'serviceData' }]
    }
  ],
  orderings: [
    {
      title: 'Service History',
      name: 'serviceData.serviceDate',
      by: [
        {field: 'serviceData.serviceDate', direction: 'asc'}
      ]
    }
],
  preview: {
    select: {
      title: 'lastName', //Might change this to (lastName: 'lastName')
      firstName: 'firstName',
      services: 'services' 
    },
    prepare ({ title = 'No name', firstName }) {
      //const title = viewOptions.ordering && viewOptions.ordering.name === 'serviceDate'
      //? `${serviceData.title} (${serviceData.serviceDate})`
      //: serviceData.title
      return {
        title,
        subtitle: firstName
          ? firstName
          : 'no firstname entered'
      }
    }
  }
}