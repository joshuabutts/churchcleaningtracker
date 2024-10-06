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
    return dateData
}
const dateData = {
    date: 'jan 34'

}