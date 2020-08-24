export default {
    title: 'Service Data',
    type: 'object',
    name: 'serviceData',
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
            title: 'Date',
            name: 'date',
            type: 'date'
        },
        {
            title: 'Description/Service Notes',
            name: 'description',
            type: 'text'
        },
        {
            title: 'Cost of visit',
            name: 'cost',
            type: 'number'
        },

    ]
}