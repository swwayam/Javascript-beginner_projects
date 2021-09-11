// the code should generate random colors.
// display them on the screen 
//aswell as give the user the name of the color / its hexadecimal value.
// On every click the background color should change
// If user has selected Simple from nav bar the color displayed in the bg its name should appear in the ans.
// If user selects hex the ans should be a hexadecimal value.

const simpleColors = ["Red", "Blue"];
const ht = document.querySelector('.content');
ht.insertAdjacentHTML("afterbegin", `
<div class="content-display">
                <h2 class="content__displayText white">
                    Background Color : <span class="content__displayAns blue">${simpleColors[0]}</span><!--Your color-->
                </h2>
            </div>
`)


