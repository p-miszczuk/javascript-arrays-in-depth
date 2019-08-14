const items =[1,2,3,4,5];

const mapped = items.map(item => item * 2)
console.log(items)
console.log(mapped)

const items2 =["1","2","3","4","5"];
const mapped2 = items2.map(item => Number(item))

console.log(items2)
console.log(mapped2)

const names = ['  Sally', 'Shane  ']
const mapped3 = names.map(x => x.trim())

console.log(names)
console.log(mapped3)

const mapped4 = mapped3.map(name => {
    return {
        firstName: name
    }
})

console.log(mapped4)

const person = [
    {
        firstName: 'Shane',
        lastName: 'Osborne'
    },
    {
        firstName: 'Sally',
        lastName: 'Osborne'
    }
]

let mapped5 = person.map(item => {
    return {
        firstName: item.firstName,
        lastName: item.lastName,
        fullName: item.firstName + " " + item.lastName
    }
})
 mapped5.forEach(person => console.log(person.fullName))

 const items3 = [
    {
        active: true,
        firstname: 'Shane',
        lastname: 'Osbourne'
    },
    {
        active: true,
        firstname: 'Sally',
        lastname: 'Osbourne'
    },
    {
        active: false,
        firstname: 'Ben',
        lastname: 'Barker'
    }
];

const mapped6 = items
    .filter(x => x.active)
    .map(x => x.firstname);

function createHtmlList(items) {
    const listElements = items3.map(x => ` <li>${x}</li>`).join('');
    return `<ul>${listElements}</ul>`;
}

console.log(createHtmlList(mapped6))

