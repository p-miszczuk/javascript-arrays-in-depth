const items = [1,2,3,4,5]

const result = items.every(x => x < 5)

console.log(result)

const fields = [
    {
        field: 'email',
        value: 'shane@example.com',
        errors: []
    },
    {
        field: 'name',
        value: '',
        errors: ['No name provided']
    },
]

const isValid = fields.every(x => x.errors.length === 0)

console.log(isValid)

var videos = [
    {
        title: 'Array methods in depth: concat',
        length: 310,
        viewed: 310
    },
    {
        title: 'Array methods in depth: join',
        length: 420,
        viewed: 360
    }
];

function complete(x) {
    return x.viewed === x.length;
}

var isComplete = videos.every(complete);
var completed = videos.filter(complete);


console.log(isComplete)
console.log(completed)

