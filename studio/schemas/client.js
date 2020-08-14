export default {
    title: 'Clients',
    name: 'client',
    type: 'document',
    fields: [
    {
        name: 'name',
        type: 'string',
        title: 'Name',
       
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
    ]
}