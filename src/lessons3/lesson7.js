let items = [1,2,3,4,5,6]

let hasThree = items.some(x => x ===3) //true or false

console.log(hasThree)

var tasks = [
    {
        title: 'Do laundry',
        completed: true
    },
    {
        title: 'Feed the cat',
        completed: true
    },
    {
        title: 'Watch the array lessons on egghead.io',
        completed: true
    }
];

function addTask(title) {
    if (tasks.some(task => task.title === title)) {
        return
    }
    tasks.push({title: title, completed: false})
}

addTask('Feed the cat')
addTask('Feed the dog')
console.log(tasks)