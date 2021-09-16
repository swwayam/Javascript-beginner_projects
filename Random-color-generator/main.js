// the code should generate random colors.
// display them on the screen 
//aswell as give the user the name of the color / its hexadecimal value.
// On every click the background color should change
// If user has selected Simple from nav bar the color displayed in the bg its name should appear in the ans.
// If user selects hex the ans should be a hexadecimal value.

import { getRandomNumber } from "./Hex";

const simpleColors = ["Blue", "Brown", "Orange", "Purple"];

// let index = 0;


// const changeColor = (color) => {
//     let displayColor = color[index];
//     if (index === color.length -1) {
//         index = 0;
//     } else {
//         index++
//     }
    

// }





const ht = document.querySelector('.content__displayText');
const button = document.querySelector('.content__displayButton');



button.addEventListener("click", () => {
   let color = simpleColors[ getRandomNumber(simpleColors)];
});


/*

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".content__displayAns");

function hi() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  // console.log(hexColor);

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
};

function getRandomNumber() {
  
}

console.log(Math.floor(Math.random() * hex.length));

hi();

*/