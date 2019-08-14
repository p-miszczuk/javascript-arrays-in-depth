let items = ["Shane","Sally", "ISaac"]

items.sort()
console.log(items)

let numbers = [10,20,2,30]

numbers.sort()
console.log(numbers)

let numbers2 = numbers.slice()

numbers2.sort((a,b) => a-b)
console.log(numbers2)

let numbers3 = numbers.slice()

numbers3.sort((a,b) => a-b).reverse()
console.log(numbers3)

let items2 = ['Johny','Ben','Adam','Greg']
items2.sort((a,b) => a.length - b.length)

console.log(items2)

var lessons = [
    {
        title: 'Javascript Array methods in depth - concat',
        views: 1000
    },
    {
        title: 'Javascript Array methods in depth - slice',
        views: 1050
    },
    {
        title: 'Javascript Array methods in depth - join',
        views: 1025
    }
];

var list = lessons
    .sort((a, b) => b.views - a.views)
    .map(x => `    <li>${x.title} (${x.views})</li>`)
    .join('\n');

var output = `<ul>\n${list}\n</ul>`;

console.log(output)