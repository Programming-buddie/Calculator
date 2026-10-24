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
       oldMemory = input.value.split("-")
      console.log((Number(oldMemory[0]) - 3))
      console.log(oldMemory)
    }
     if (btn.innerText === "="){
         oldMemory = input.value.split("-")
        // console.log(input.value.split(oldMemory))
        input.value = Number(oldMemory[0]-oldMemory[1])
      }
    
  }

  
  })

