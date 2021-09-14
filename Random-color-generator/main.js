// the code should generate random colors.
// display them on the screen 
//aswell as give the user the name of the color / its hexadecimal value.
// On every click the background color should change
// If user has selected Simple from nav bar the color displayed in the bg its name should appear in the ans.
// If user selects hex the ans should be a hexadecimal value.

const simpleColors = ["Blue", "Brown", "Orange", "Purple"];

let index = 0;
let displayColor = 'Red';
const changeColor = (color) => {
    displayColor = color[index];
    if (index === color.length -1) {
        index = 0;
    } else {
        index++
    }
    ht.insertAdjacentHTML("beforeend", `
 <span class="content__displayAns blue">${displayColor}</span>              
`);
    displayColor = '';
}



const ht = document.querySelector('.content__displayText');
const button = document.querySelector('.content__displayButton');



button.addEventListener("click", () => {
    changeColor(simpleColors);
});




ht.insertAdjacentHTML("beforeend", `
<span class="content__displayAns blue">${displayColor}</span>              
`);