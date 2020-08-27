export default {
    title: 'Salt Delivery',
    name: 'saltDelivery',
    type: 'object',
    fields: [
        {
            title: 'Auto Salt',
            name: 'autoSalt',
            type: 'boolean'
        },
        {
            title: 'Number of bags',
            name: 'numOfBags',
            type: 'number'
        },
        {
            title: 'Last Salt',
            name: 'lastSalt',
            type: 'date'
        },
        {
            title: 'Next Salt',
            name: 'nextSalt',
            type: 'date'
        },
        {
            title: 'Notes for Salt Delivery',
            name: 'saltDescription',
            type: 'text'
        },
    ]
}