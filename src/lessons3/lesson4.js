let items = [1,2,3,4,5]
let copy = items.slice() //copy
copy.push(6) //add

console.log(items)
console.log(copy)

copy[0] = 100;
console.log(copy)

let person = {
    name: "Shane"
}

let items2 = [1, person]
let copy2 = items2.slice()

copy2[1].name = "Ben" //change in items2 also

console.log(items2)
console.log(copy2)

let items3 = [1,2,3,4,5];
let copy3 = items3.slice(0,3)
let copy4 = items.slice(1,3)
let copy5 = items.slice(3)
let copy6 = items.slice(-1)
let copy7 = items.slice(-2)
let copy8 = items.slice(1,-1)

console.log(copy3)
console.log(copy4)
console.log(copy5)
console.log(copy6)
console.log(copy7)
console.log(copy8)

let person2 = {
    name: "shane-osborne"
}

let filters = {
    'deslugify': x => x.replace('-', ' '),
    'uppercase': x => x.toUpperCase()
}

let input = 'name | deslugify | uppercase'

let sections = input.split('|').map(x => x.trim()) //[name, deslugify, uppercase]
let ref = person2[sections[0]]
let output = sections
                .slice(1)
                .reduce((prev, next) => {
                    if (filters[next]) {
                        return filters[next].call(null, prev)
                    }
                    return prev
                },ref)

console.log(output)