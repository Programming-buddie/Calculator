// const button = document.querySelectorAll("button")

// function getsome(){
//     const but = document.querySelector("button")
//     but.addEventListener("click", () => { input.value = but.value
//     })
// }
// // button.forEach(button.addEventListener("click", (e) => {
// //     console.log("cool")
// //     e.stopPropagation()
// // }))


// const input = document.querySelector("input")
// console.log(input.value,input.formTarget

// )
// getsome()


const button = document.querySelectorAll("button")
const button_1 = document.querySelector('button')
const input = document.querySelector("input")


// for (let index = 0; index <= 13; index++) {
//     // const element = array[index];
//     console.log(index)
//     button.item(index[1]).addEventListener('click', () => {
//     input.value = button.item(index).value})
//     console.log(index,input.value)
//}


// To make it display after been clicked
button_1.addEventListener("click", value)

button.item(1).addEventListener('click', () => {
    input.value = button.item(1).value
})

button.item(1).addEventListener("dblclick", () => {
    input.value = button.item(1).value
})


button.item(2).addEventListener("click", () => { 
    input.value = button.item(2).value
    })



button.item(12).addEventListener("click", oldmem)

function oldmem() {
    let oldmemory = Number(input.value)
    let newmemory = Number(input.value)
    console.log(oldmemory)
    console.log(newmemory)
    const answer = oldmemory
    input.value = answer
}

function value(){
        input.value = button_1.value
    }


// function display_memory(){
//     if(button_val.focus == undefined){
//         console.log("YES")
//     }else{
//         console.log("Bullshit")
//     }
// }

// display_memory()
