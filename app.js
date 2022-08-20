// #1: Print numbers from 1 to 10
const buttonOne = document.getElementById('buttonOne');
const resultOne = document.getElementById('resultOne');

buttonOne.addEventListener('click', function () {
   let arr = [];
   for (let i = 1; i <= 10; i++) {
      arr.push(i);
   }
   resultOne.innerHTML = arr;
});


// #2: Print the odd numbers less than 100
const buttonTwo = document.getElementById('buttonTwo');
const resultTwo = document.getElementById('resultTwo');

buttonTwo.addEventListener('click', function () {
   let arr = []
   for (let i = 1; i < 100; i += 2) {
      arr.push(i);
   }
   let arrResult = arr.join(', ')
   resultTwo.innerHTML = arrResult;
});


// #3: P#3: Print the multiplication table with 7
const buttonThree = document.getElementById('buttonThree');
const resultThree = document.getElementById('resultThree');

buttonThree.addEventListener('click', function () {
   let arr = []
   for (var i = 1; i <= 10; i++) {
      let result = 7 * i;
      arr.push(result)
   }

   arr.forEach(num => {
      resultThree.append(`7 * ${i} = ${num} ; `);
   });
});


// #4: Print all the multiplication tables with numbers from 1 to 10
const buttonFour = document.getElementById('buttonFour');
const resultFour = document.getElementById('resultFour');
const table = document.getElementById('table');

buttonFour.addEventListener('click', function () {
   let arr = []
   for (let i = 1; i <= 10; i ++) {
      for (let j = 1; j <= 10; j++) {
         let result = i * j;
         resultFour.append(`${i} * ${j} = ${result} ;  `)
      }
   }
});


// #5: Calculate the sum of numbers from 1 to 10
const buttonFive = document.getElementById('buttonFive');
const resultFive = document.getElementById('resultFive');
let sum = 0;

buttonFive.addEventListener('click', function(){
   for(let i = 1; i <= 10; i++) {
      sum += i;
   };
   resultFive.innerHTML = sum;
});


// #6: Calculate 10! (1*2*3*4.....)
const buttonSix = document.getElementById('buttonSix');
const resultSix = document.getElementById('resultSix');
let sumFact = 1;
let base = 10;

buttonSix.addEventListener('click', function () {
   for (var i = 1; i <= base; i ++) {
      sumFact = sumFact * i;
   };
   resultSix.innerHTML = sumFact;
});

// #7: Calculate the sum of odd numbers greater than 10 and less than 30
const buttonSeven = document.getElementById('buttonSeven');
const resultSeven = document.getElementById('resultSeven');
let total = 0;

buttonSeven.addEventListener('click', function(){
   for (let i = 11; i < 30; i ++) {
      total += i;
   }
   resultSeven.innerHTML = total;
});


// #8: Create a function that will convert from Celsius to Fahrenheit;
const input = document.getElementById('input');
const output = document.getElementById('output');

input.addEventListener('keyup', function(){
   const inputValue = input.value;
   const celc = Number (inputValue);
   console.log(celc);

   const convert = (celc) => {
      return (celc * 9/5) + 32;
   }
   output.value = convert(celc);
});

// #9: Calculate the sum of numbers in an array of numbers
const buttonNine = document.getElementById('buttonNine');
const resultNine = document.getElementById('resultNine');

const arry = [1,2,3,4,5,6,7,8,9];
let arrySum = 0;

buttonNine.addEventListener('click', function (){
   for (key of arry) {
      arrySum += key;
   }
   resultNine.innerHTML = arrySum;
});


// #10: Calculate the average of the numbers in an array of numbers

const buttonTen = document.getElementById('buttonTen');
const resultTen = document.getElementById('resultTen');

buttonTen.addEventListener('click', function() {
   const arrayTwo = [1,2,3,4,5,6,7,8,9];
   let averagex = 0;

   const result = arrayTwo.forEach(num => {
      return averagex += num;
   });
   const mainResult = averagex / arrayTwo.length;

   resultTen.innerHTML = mainResult;
});












