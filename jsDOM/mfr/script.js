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
    url: "flw1.jpg", 
    title : "Title 1",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
    url: "flw2.jpeg", 
    title : "Title 2",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
    url: "flw3.jpeg", 
    title : "Title 3",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
    url: "flw4.jpeg", 
    title : "Title 4",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
    url: "flw5.jpeg", 
    title : "Title 5",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
]

const container = document.querySelector(".container");

DATA.map(el => {
    const newDiv = document.createElement("div")
    newDiv.setAttribute("class","card")
    newDiv.style.width = "18rem"
    newDiv.style.margin = "2vh 0"

    const img = document.createElement("img")
    img.setAttribute("src", `./images/${el.url}`)
    img.setAttribute("class", "card-img-top")

    const innerDiv = document.createElement("div")
    innerDiv.setAttribute("class","card-body")


    const head = document.createElement("h5")
    head.setAttribute("class","card-title")
    head.textContent = el.title

    const prg = document.createElement("p")
    prg.setAttribute("class","card-text")
    prg.textContent = el.description

    const btn = document.createElement("a")
    btn.setAttribute("class", "btn btn-primary")
    btn.textContent = "Go somewhere"

    innerDiv.appendChild(head)
    innerDiv.appendChild(prg)
    innerDiv.appendChild(btn)

    newDiv.appendChild(img)
    newDiv.appendChild(innerDiv)

    container.appendChild(newDiv)
})