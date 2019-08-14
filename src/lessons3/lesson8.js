import { pseudo } from "postcss-selector-parser";

let pets = ["cat",'dog']
const wishlist = ["Hamster", "Horse", "Snake"]

// pets.push.apply(pets, wishlist)
pets.push(...wishlist)
// pets.push("Hamster", "Horse")

console.log(pets)