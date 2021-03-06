export default {
    title: 'Service Data',
    name: 'serviceData',
    type: 'object',
    fields: [
        {
            title: 'Service Type',
            name: 'serviceType',
            type: 'string',
            options: {
                list: [
                    'Free In-Home Estimate',
                    'Water Testing',
                    'Warranty and Service',
                    'Salt Delivery',
                    'Existing System Service',
                    'Softener Rentals'
                ]

            },
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            description: 'Some frontend will require a slug to be set to be able to show the service',
            options: {
                source: (doc, {parent}) => parent && parent.title                
            }

        },
        {
            title: 'Service Date',
            name: 'serviceDate',
            type: 'date',
        },
        {
            title: 'Sales Amount',
            name: 'salesAmount',
            type: 'number'
        },
        {
            title: 'Equipment',
            name: 'equipment',
            type: 'array',
            of: [{ type: 'serviceEquip'}]  
        },
        {
            title: 'Last Service 1',
            name: 'lastService1',
            type: 'string'
        },
        {
            title: 'Card Sent',
            name: 'cardSent1',
            type: 'date'
        },
        {
            title: 'Next Service Due 1',
            name: 'nextServiceDue1',
            type: 'string'
        },
        {
            title: 'Description/Service Notes',
            name: 'description1',
            type: 'text'
        },
        {
            title: 'Last Service 2',
            name: 'lastService2',
            type: 'string'
        },
        {
            title: 'Card Sent',
            name: 'cardSent2',
            type: 'date'
        },
        {
            title: 'Next Service Due 2',
            name: 'nextServiceDue2',
            type: 'string'
        },
        {
            title: 'Description/Service Notes',
            name: 'description2',
            type: 'text'
        },
        {
            title: 'A/C',
            name: 'ac',
            type: 'boolean'
        },
        {
            title: 'R/O',
            name: 'ro',
            type: 'boolean'
        },
        {
            title: 'Description/Service Notes',
            name: 'description3',
            type: 'text'
        }
    ],
    orderings: [
        {
          title: 'Service Date',
          name: 'serviceDate',
          by: [
            {field: 'serviceDate', direction: 'asc'}
          ]
        }
    ],
    preview: {
        select: {
          title: 'serviceType',
          serviceDate: 'serviceDate'
        },
        prepare(serviceData, viewOptions = {}) {
          const title = viewOptions.ordering && viewOptions.ordering.name === 'serviceDate'
          ? `${serviceData.title} (${serviceData.serviceDate})`
          : `${serviceData.title} (${serviceData.serviceDate})`
          
          return {
              title
            }
        }
    }
}