//? Console'dan girilen bir sayinin tek veya cift olddgunu
//? hesaplayan ve sonucu ana programa donduren kodu fonksiyonlar
//? ile yaziniz.

console.log(oddOrEven(77));

function oddOrEven(num) {
  // return num % 2 ? "ODD" : "EVEN"
  return num % 2 === 0 ? "EVEN" : "ODD";

  //? Alternative
  // let result
  // if (num % 2 === 0) {
  //   result = "EVEN"
  // } else {
  //   result = "ODD"
  // }
  // return result;
}

const number = +prompt("Please enter a number to check odd or even:");
const oddEven = oddOrEven(number);
console.log(`${number} is ${oddEven}`);
