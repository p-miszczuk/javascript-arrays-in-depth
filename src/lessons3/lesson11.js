const items = [1,2,3,4,5];
const sum = items.reduce((prev, item) => {
    console.log('prev ' + prev + " item "+ item)
    return prev + item
})

// fn(1,2) -> 3
// fn(3,3) -> 6
// fn(6,4) ->10

console.log(sum)

const sum2 = items.reduce((prev, item) => {
    console.log('prev ' + prev + " item "+ item)
    return prev + item
},0)

// fn(0,1) -> 1
// fn(1,2) -> 3
// fn(3,3) -> 6

console.log(sum2)

const albums = [
    {
        title: "Holiday in Spain",
        images: ['01.jpg', '02.jpg']
    },
    {
        title: "House renovation",
        images: ['03.jpg', '04.jpg', '05.jpg']
    }
]

const numImages = albums.reduce((prev, album) => {
    return prev + album.images.length
}, 0)

console.log(numImages)

const numImages2 = albums.reduce((prev, album) => {
    return prev.concat(album.images)
}, [])

console.log(numImages2)

const users = [
    {
        id: '01',
        name: 'Shane'
    },
    {
        id: '02',
        name: 'Sally'
    }
];

const newUsers = users.reduce((obj, user) => {
    obj[user.id] = user;
    return obj;
}, {});

console.log(newUsers)