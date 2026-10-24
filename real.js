const input = document.querySelector("input");
const button = document.querySelectorAll("button");
const clearButton = document.querySelector("#clear");


button.forEach((btn) => {
  btn.addEventListener("click", appear);

  function appear() {
    input.value = input.value.concat(btn.value);
    if (input.value === "-") {
      console.log("sub", input.value);
    }

    // if (btn.value === "-"){
    //    oldMemory = input.value.split("-")
    //   console.log((Number(oldMemory[0]) - 3))
    //   console.log(oldMemory)
    // }
    if (btn.innerText === "=") {
      let add = input.value.split("+");
      let sub = input.value.split("-");

      if (input.value.includes("+")) {
        input.value = Number(add[0]) + Number(add[1]);
      }
      if (input.value.includes("-")) {
        input.value = Number(sub[0]) + Number(sub[1]);
      }
    }
  }
});
clearButton.addEventListener("click", ()=>{
  input.value = ''
})
