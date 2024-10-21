export const upcomingEvents = [
    {
        ward: 'Spanish Fork 4th',
        uuid: 'e7b3c1f0-5c4e-4c8b-9b8e-3c1e4f5e6a7b', // Unique UUID
        events: [
            { id: 1, date: '2024-01-06' }, // 1st Saturday
            { id: 2, date: '2024-01-13' }, // 2nd Saturday
            { id: 3, date: '2024-01-20' }, // 3rd Saturday
            { id: 4, date: '2024-01-27' }  // 4th Saturday
        ],
        mymonth: true
    },
    {
        ward: 'Spanish Fork 12th',
        uuid: 'f1a2b3c4-d5e6-7f8g-9h0i-j1k2l3m4n5o6', // Unique UUID
        events: [
            { id: 5, date: '2024-02-03' }, // 1st Saturday
            { id: 6, date: '2024-02-10' }, // 2nd Saturday
            { id: 7, date: '2024-02-17' }, // 3rd Saturday
            { id: 8, date: '2024-02-24' }  // 4th Saturday
        ],
        mymonth: false
    },
    {
        ward: 'Legacy Farms 1st',
        uuid: 'a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6', // Unique UUID
        events: [
            { id: 9, date: '2024-03-02' }, // 1st Saturday
            { id: 10, date: '2024-03-09' }, // 2nd Saturday
            { id: 11, date: '2024-03-16' }, // 3rd Saturday
            { id: 12, date: '2024-03-23' }  // 4th Saturday
        ],
        mymonth: false
    },
    {
        ward: 'Legacy Farms 2nd',
        uuid: 'b1c2d3e4-f5g6-7h8i-9j0k-l1m2n3o4p5q6', // Unique UUID
        events: [
            { id: 13, date: '2024-04-06' }, // 1st Saturday
            { id: 14, date: '2024-04-13' }, // 2nd Saturday
            { id: 15, date: '2024-04-20' }, // 3rd Saturday
            { id: 16, date: '2024-04-27' }  // 4th Saturday
        ],
        mymonth: false
    },
    {
        ward: 'Spanish Fork 4th',
        uuid: 'c1d2e3f4-g5h6-7i8j-9k0l-m1n2o3p4q5r6', // Unique UUID
        events: [
            { id: 17, date: '2024-05-04' }, // 1st Saturday
            { id: 18, date: '2024-05-11' }, // 2nd Saturday
            { id: 19, date: '2024-05-18' }, // 3rd Saturday
            { id: 20, date: '2024-05-25' }  // 4th Saturday
        ],
        mymonth: true
    }
];
export function getPageData() {
    return assignments
}
const assignments = [
    {
        "category": "Chapel",
        "assignments": [
            {
                "title": "Vacuum chapel floor",
                "description": "Vacuum the floor of the chapel as needed.",
                "required": false
            },
            {
                "title": "Vacuum chapel seats",
                "description": "Vacuum the seats in the chapel regularly.",
                "required": true
            },
            {
                "title": "Clean sacrament room",
                "description": "Thoroughly clean the sacrament room as required.",
                "required": true
            }
        ]
    },
    {
        "category": "Bathrooms",
        "assignments": [
            {
                "title": "Mirrors",
                "description": "Clean all mirrors in the bathrooms regularly.",
                "required": true
            },
            {
                "title": "Sinks",
                "description": "Clean and sanitize all sinks in the bathrooms.",
                "required": true
            },
            {
                "title": "Toilets & Urinals",
                "description": "Clean and disinfect toilets and urinals.",
                "required": true
            },
            {
                "title": "Sweep & Mop floors",
                "description": "Sweep and mop the bathroom floors regularly.",
                "required": true
            },
            {
                "title": "Refill empty paper towel dispensers",
                "description": "Ensure paper towel dispensers are filled.",
                "required": true
            },
            {
                "title": "Refill toilet paper",
                "description": "Check and refill toilet paper supplies.",
                "required": true
            },
            {
                "title": "Refill Soap dispensers",
                "description": "Refill soap dispensers as needed.",
                "required": true
            }
        ]
    },
    {
        "category": "Vacuum",
        "assignments": [
            {
                "title": "North hallway",
                "description": "Vacuum the north hallway regularly.",
                "required": true
            },
            {
                "title": "East hallway",
                "description": "Vacuum the east hallway regularly.",
                "required": true
            },
            {
                "title": "South hallway",
                "description": "Vacuum the south hallway regularly.",
                "required": true
            },
            {
                "title": "West hallway",
                "description": "Vacuum the west hallway regularly.",
                "required": true
            },
            {
                "title": "North classrooms",
                "description": "Vacuum the north classrooms regularly.",
                "required": true
            },
            {
                "title": "East classrooms",
                "description": "Vacuum the east classrooms regularly.",
                "required": true
            },
            {
                "title": "West classrooms",
                "description": "Vacuum the west classrooms regularly.",
                "required": true
            },
            {
                "title": "South classrooms",
                "description": "Vacuum the south classrooms regularly.",
                "required": true
            }
        ]
    },
    {
        "category": "Garbages",
        "assignments": [
            {
                "title": "Take out Garbages and replace liners",
                "description": "Empty garbage bins and replace liners as needed.",
                "required": true
            }
        ]
    },
    {
        "category": "Kitchen",
        "assignments": [
            {
                "title": "Clean Sink, Stove, Microwave & Fridge",
                "description": "Clean kitchen appliances as needed.",
                "required": false
            },
            {
                "title": "Clean Countertops",
                "description": "Wipe down and sanitize kitchen countertops.",
                "required": true
            },
            {
                "title": "Sweep & Mop Floor",
                "description": "Sweep and mop the kitchen floor regularly.",
                "required": true
            }
        ]
    },
    {
        "category": "Cultural Hall",
        "assignments": [
            {
                "title": "Dust and mop floors",
                "description": "Dust and mop the floors as needed.",
                "required": false
            },
            {
                "title": "Clean stage",
                "description": "Clean the stage area thoroughly.",
                "required": true
            }
        ]
    },
    {
        "category": "Windows",
        "assignments": [
            {
                "title": "North doorway",
                "description": "Clean the windows at the north doorway.",
                "required": true
            },
            {
                "title": "South doorway",
                "description": "Clean the windows at the south doorway.",
                "required": true
            },
            {
                "title": "East Doorway",
                "description": "Clean the windows at the east doorway.",
                "required": true
            },
            {
                "title": "West doorway",
                "description": "Clean the windows at the west doorway.",
                "required": true
            },
            {
                "title": "Classroom door windows",
                "description": "Clean the windows of classroom doors as needed.",
                "required": false
            }
        ]
    },
    {
        "category": "Other",
        "assignments": [
            {
                "title": "Clean Door Knobs & Door Push Plates",
                "description": "Sanitize door knobs and push plates as needed.",
                "required": false
            },
            {
                "title": "Clean drinking fountains",
                "description": "Clean and sanitize drinking fountains as needed.",
                "required": false
            },
            {
                "title": "Chalkboards",
                "description": "Clean chalkboards with a Finney eraser and dry cloths, do not use water.",
                "required": false
            },
            {
                "title": "Sweep Entryway Exteriors",
                "description": "Sweep the exterior entryways as needed.",
                "required": false
            }
        ]
    }
]



