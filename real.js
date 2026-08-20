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

//Geting Element
const button = document.querySelectorAll("button");
const button_1 = document.querySelector("button");
const input = document.querySelector("input");

let old_memory;
// Creating Add function
function add() {
  old_memory = Number(input.value);
  input.value = old_memory+"+"
  console.log(old_memory);
  
}

// Creating Subtract Function
function sub() {
  old_memory = Number(input.value);
  input.value = old_memory+"-"
  console.log(old_memory);
}




// To make it display after been clicked
button_1.addEventListener("click", value);

button.item(1).addEventListener("click", () => {
  input.value = button.item(1).value;
});

button.item(2).addEventListener("click", () => {
  input.value = button.item(2).value;
});
button.item(3).addEventListener("click", () => {
  input.value = button.item(3).value;
});
button.item(4).addEventListener("click", () => {
  input.value = button.item(4).value;
});
button.item(5).addEventListener("click", () => {
  input.value = button.item(5).value;
});
button.item(6).addEventListener("click", () => {
  input.value = button.item(6).value;
});
button.item(7).addEventListener("click", () => {
  input.value = button.item(7).value;
});
button.item(8).addEventListener("click", () => {
  input.value = " " + button.item(8).value;
});
button.item(9).addEventListener("click", () => {
  input.value = button.item(9).value;
});

// Addition Button
// button.item(10).addEventListener("click", () => {
//     input.value = button.item(10).value
// })
button.item(10).addEventListener("click", add);

// Subtraction Button
button.item(11).addEventListener("click", sub);



button.item(12).addEventListener("click", result);

let new_memory
function result() {

  new_memory = Number(input.value);
  input.value = old_memory + "+" + new_memory
  console.log(new_memory);
  const answer = old_memory + new_memory
  console.log(answer)
  input.value = answer

  // if (button.item(10)) {
  //   console.log("add");
  //   add();
  // }
  // if (button.item(11)) {
  //   console.log("Sub");
  //   sub();
  // } else {
  //   console.log("Failed");
  // }
}

// Clear Button
button.item(13).addEventListener("click", () => {
  old_memory = 0;
  new_memory = 0;
});
button.item(13).addEventListener("click", () => {
  input.value = 0;
  
});
function value() {
  input.value = button_1.value;
}

// function display_memory(){
//     if(button_val.focus == undefined){
//         console.log("YES")
//     }else{
//         console.log("Bullshit")
//     }
// }

// display_memory()
