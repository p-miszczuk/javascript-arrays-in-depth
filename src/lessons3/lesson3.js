let family = ["Shane","sally","Isaac","Kittie"]

console.log(family.indexOf('Kittie')) //exist
console.log(family.indexOf('Kitties'))

const kittiesExists = family.indexOf("Kitties") > -1
console.log(kittiesExists)

const kittieExists = family.indexOf("Kittie") > -1
console.log(kittieExists)

if (!kittiesExists) {
    family.push("Kitties")
}

console.log(family)

console.log(family.indexOf('sally', 2))
console.log(family.indexOf('sally', 1))

let shane = {
    name: "Shane"
}

let sally = {
    name: "Sally"
}

let kittie = {
    name: "Kittie"
}

let fam = [shane,sally,kittie]

console.log(fam.indexOf(kittie))

const whitelist = ['.css','.js']

let events = [
    {
        file: 'css/core.css'
    },
    {
        file: 'js/app.js'
    },
    {
        file: 'index.html'
    }
]

let filtered = events.filter(event => {
    let ext = require('path').extname(event.file);
    return whitelist.indexOf(ext) > -1
})

console.log(filtered)