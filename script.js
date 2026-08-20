zzzzzzzzzzzz// function birthday(n) {
//   console.log(n)
//   if (n <= 1) return

//   console.log("Before"+n)
//   birthday(n - 1)
//   //console.log("After")
// }

// birthday(3)

const data = [1, [2, 3], [4, [5, 6]], 7];

function findHigh(n) {
  //console.log("NO")
  for (num of n) {
    console.log(num);
  }
  if (Array.isArray(n)) return;

  console.log(n);
}
findHigh(data);
