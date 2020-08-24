
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'services',
      title: 'Service History',
      type: 'array',
      of: [
        {
          title: 'Service Type',
          type: 'serviceData',
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      services: 'services' 
    },
    prepare ({ title = 'No name', services }) {
      return {
        title,
        subtitle: services
          ? services.length
          : 'no service history'
      }
    }
  }
}