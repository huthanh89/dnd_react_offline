export default [
    { 
        id:       '0',
        name:     'CPU, Socket AM3',
        type:     'cpu',
        img:      'cpu',
        connected: false,
    },
    { 
        id:   '1',
        name: 'Radion RX 550',
        type: 'graphic_card',
        img:  'graphic_card',
        connected: false

    },
    {
        id:   '2',
        name: 'DDR3 GB, DDR3 1600',
        type: 'ram',
        img:  'ram',
        connected: false,
    },
    { 
        id:   '3',
        name: 'Power Supply, ATX 20+4pin, PCIe',
        type: 'power_supply',
        img:  'powersupply',
        connected: false,
        connectors: [
            {
                id:        '3a',
                connector: 'Power Supply 20+4 pin',
                connected: false,
                img:       'connector'
            },
            {
                id:        '3b',
                connector: 'Power Supply 8 pin CPU',
                connected: false,
                img:       'connector'
            },
            {
                id:        '3c',
                connector: 'SATA 15 pin',
                connected: false,
                img:       'connector'
            },
            {
                id:        '3d',
                connector: 'SATA 15 pin',
                connected: false,
                img:       'connector'
            },
            {
                id:        '3e',
                connector: 'SATA 15 pin',
                connected: false,
                img:       'connector'
            },
            {
                id:        '3f',
                connector: 'SATA 15 pin',
                connected: false,
                img:       'connector'
            },
            {
                id:        '3g',
                connector: 'Power Supply 4 pin pro',
                connected: false,
                img:       'connector'
            }
        ]
    },
];