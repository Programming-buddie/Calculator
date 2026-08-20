// const div = document.getElementsByClassName('c')
// console.log(div.length)



// const newdiv = document.createElement("div")
// newdiv.className = "c"
// document.body.appendChild(newdiv)

// console.log(div.length)

//change the header to welcome
// const h = document.querySelector('#main-header')
// h.textContent = 'Welcome!'


// // Make all paragraph blue
// document.querySelectorAll('p').forEach((p) => {
//     p.style.color = "blue"
// })

// const lastpara = document.querySelector("p:last-of-type")
// lastpara.style.display = "none"





// // add a border to input

// document.querySelectorAll('input.required').forEach((input) => {
//     input.style.border = "30px solid red"
// })




const a = document.querySelector("a")
const body = document.querySelector("body")
const input = document.querySelector("input")



const bod_children = body.children
console.log(bod_children)
console.log(a.nextElementSibling.value + 1)
const b = a.nextElementSibling.value
console.log(input.inputMode,"hf")
console.log(1+1)

a.addEventListener("formdata", (Event) => {
    console.log()
    Event.preventDefault()
    
}, {capture: true})


