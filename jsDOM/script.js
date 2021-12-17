// getElementById
// let fName = document.getElementById("first-name")
let lastName = document.getElementById("last-name")
// console.log(fName)
// console.log(lastName)

//getElementsByClassName
let formControl = document.getElementsByClassName("form-control")
// console.log(formControl)
// let val = document.getElementById("first-name").className
// console.log(val)
// getElementByTagName
let input = document.getElementsByTagName("input")
//console.log(input)

//querySelector
// let firstName = document.querySelector("#first-name")
//console.log(firstName)

let div = document.querySelectorAll("div")
//console.log(div)

let fControl = document.querySelector(".form-control")
console.log(fControl)

let fControlAll = document.querySelectorAll(".form-control")
console.log(fControlAll)

//console.log(fControlAll[1])
// document.querySelector("#first-name").value = "Utku"
// onst val = firstName.value
//console.log(val)

let formItems = document.querySelector(".form-items").innerText
//console.log(formItems)
//console.log(formItems)

//let first3 = document.querySelector("#first-three").innerHTML
let first3 = document.querySelector("#first-three").innerHTML
// console.log(first3)

let check = document.querySelector(".form-check-label").innerText
console.log(check)

let fItems = document.querySelector(".form-items").textContent
//console.log(fItems)

// let firstName = document.querySelectorAll(".form-control")[0]
// //console.log(firstName)

// firstName.setAttribute("id", "first-name")
// //console.log(firstName)
// firstName.setAttribute("placeholder", "First Name")
// //console.log(firstName)

// firstName.setAttribute("class-name", "name class")
// console.log(firstName)

// const classAttr = firstName.getAttribute("class")
// console.log(classAttr)
// const classNameAttr = firstName.getAttribute("class-name")
// console.log(classNameAttr)

const firstName = document.getElementById("first-name")
console.log(firstName)

firstName.className = "form-control first-name"
console.log(firstName)
// const classProp = firstName.className
// console.log(classProp)

firstName.classList.add("Hasan")
console.log(firstName)

firstName.classList.remove("form-control")
console.log(firstName)

firstName.setAttribute("class", "Htoker")
console.log(firstName)
// firstName.className = "Gamze"
// console.log(firstName)

//first3.innerHTML = `<div>Muhlise</div>`



// let node = document.createElement("div")
// let text = document.createTextNode("Utku")
// node.appendChild(text)

// first3.appendChild(node)