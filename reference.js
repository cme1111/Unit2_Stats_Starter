const arrFruitEmpty = [];
const arrFruit = ["orange", "kiwi", "mango"];
// console.log(arrFruit);
// console.log(arrFruit[0]);
// console.log(arrFruit[1]);
// console.log(arrFruit[2]);
// console.log(arrFruit[3]);
// console.log(arrFruit[arrFruit.length - 1]);
arrFruit.push("watermelon");
console.log(arrFruit);
// const lastElement = arrFruit.pop()
// console.log(lastElement)
// console.log(arrFruit)
// arrFruit.unshift("apple")
// console.log(arrFruit)
// const firstElement = arrFruit.shift();
// console.log(firstElement)
// console.log(arrFruit)
// const sliceArr = arrFruit.slice(1, 3);
// console.log(sliceArr);
// console.log(arrFruit);
// const spliceArr = arrFruit.splice(1, 3);
// console.log(spliceArr);
// console.log(arrFruit);
for (let i = 0; i < arrFruit.length; i++) {
  console.log(The index is ${i} and the value is ${arrFruit[i]});
}
console.log(arrFruit);
let index = 0;
while (index < arrFruit.length) {
  console.log(The index is ${index} and the value is ${arrFruit[index]});
  index++;
}
const myFunction = () => {
  console.log(arrFruitEmpty);
  const temp = "In Function";
  console.log(temp);
  if (temp) {
    const newTemp = "in if statement";
    console.log(newTemp);
  }
  //   console.log(newTemp)
};
myFunction();
// console.log(temp);
const numArr = [1, 3, 4, 6, 732, 56, 345];
const returnArrWithNumsPlusOne = (arr) => {
  const returnArr = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(the index is ${i} and the value is ${arr[i]});
    returnArr.push(arr[i] + 1);
  }
  return returnArr;
};
const newArr = returnArrWithNumsPlusOne(numArr);
console.log(newArr);