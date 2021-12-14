// getElementById
let fName = document.getElementById("first-name")
let lastName = document.getElementById("last-name")
console.log(fName)
console.log(lastName)

//getElementsByClassName
let formControl = document.getElementsByClassName("form-control")
console.log(formControl)

// getElementByTagName
let input = document.getElementsByTagName("input")[3]
//console.log(input)

//querySelector
let firstName = document.querySelector("#first-name")
//console.log(firstName)

let div = document.querySelectorAll("div")
//console.log(div)

let fControl = document.querySelector(".form-control")
//console.log(fControl)

let fControlAll = document.querySelectorAll(".form-control")

//console.log(fControlAll)
//console.log(fControlAll[1])
// document.querySelector("#first-name").value = "Utku"
firstName.value = "Kemal"

let formItems = document.querySelector(".form-items").innerText
console.log(formItems)
//console.log(formItems)

let first3 = document.querySelector("#first-three")
console.log(first3)

first3.innerHTML = `<div>Muhlise</div>`



// let node = document.createElement("div")
// let text = document.createTextNode("Utku")
// node.appendChild(text)

// first3.appendChild(node)