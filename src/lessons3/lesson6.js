let items = [1,2,3,4,5];
let filtered = items.filter(x => x > 3)

console.log(items)
console.log(filtered)

let people = [
    {
        name: "Shane",
        pets: ['cat', 'dog']
    },
    {
        name: "Simon",
        pets: ['horse']
    },
    {
        name: "Shane",
        // pets: []
    },

]

// let filtered2 = people.filter(x => x.pets.length)
let filtered2 = people.filter(x => x.pets)
console.log(filtered2)

const lessons = [
    {
        title: 'Javascript Arrays in Depth - join',
        views: 960,
        tags: ['array', 'join']
    },
    {
        title: 'Javascript Arrays in Depth - concat',
        views: 1050,
        tags: ['array', 'concat']
    },
    {
        title: 'Javascript Arrays in Depth - slice',
        views: 2503,
        tags: ['array', 'slice']
    },
    {
        title: 'Javascript Functions in Depth - bind',
        views: 2500,
        tags: ['functions', 'bind']
    }
];

const minViews = 1000;
const searchTerm = 'array';

const filtered3 = lessons
    .filter(x => x.tags.indexOf(searchTerm) > -1)
    .filter(x => x.views > minViews)
    .sort((a, b) => b.views - a.views)
    .map(x => `  <li>${x.title}</li>`)
    .join('\n');

console.log(filtered3)

