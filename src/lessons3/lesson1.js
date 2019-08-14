let items = [1,2]
let newItems = items.concat(3,4,"string",undefined)
console.log(newItems)

let newItems2 = items.concat([10,11],[5,[6,7]],8)
console.log(newItems2)

let newItems3 = items.concat([10,11],[5,6,7],8)
console.log(newItems3)

let people = [
    {
        name: "Shane"
    },
    {
        name: "Sally"
    }
]

let people2 = [
    {
        name: "Simon"
    },
    {
        name: "Ben"
    }
]

people
    .concat(people2)
    .forEach(function(person){
        console.log(person.name)
    })
