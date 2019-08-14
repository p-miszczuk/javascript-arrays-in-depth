let names = ['Shane', 'Ben', 'Tom']

console.log(names[0] + " " + names[1])

console.log(names.join(' '))
console.log(names.join('-'))
console.log(names.join('.'))

let name = 'shane johnson';
console.log(name)

let upper = name.split(" ")
    .map(x => x.charAt(0).toUpperCase() + x.slice(1))
    .join(' ')

console.log(upper)