// MAP - FILTER - REDUCE

const arr = [1, 4, 6, 9, 12, 56]

const mapped = arr.map((element, index, array) => {
    // console.log(`element: ${element}, index: ${index}, array: ${array}`)
    return `index:${index}, ${element ** 3} ` 
})

console.log(arr)
console.log(mapped)

const DATA = [
    {
    url: "./images/flw1.jpg", 
    title : "Title 1",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
    url: "./images/flw2.jpeg", 
    title : "Title 2",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
    url: "./images/flw3.jpeg", 
    title : "Title 3",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
    url: "./images/flw4.jpeg", 
    title : "Title 4",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
    url: "./images/flw5.jpeg", 
    title : "Title 5",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
]