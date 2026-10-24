const input = document.querySelector("input")

const button = document.querySelectorAll("button")


button.forEach(btn =>{
  btn.addEventListener("click", appear)

  function appear() {
    input.value=input.value.concat(btn.value)
    if (input.value === "-"){
      console.log("sub", input.value)
    }
    let oldMemory
    if (btn.value === "-"){
      const oldMemory = input.value.split("-")
      console.log(input.value)
    }
     if (btn.innerText === "="){
        const oldMemory = input.value.split("-")
        // console.log(input.value.split(oldMemory))
        console.log(input.value, 99-1, typeof input.value)
      }
    
  }

  
  })
//   let btn= "-"
// console.log(btn.match(/(-)/)[0])
