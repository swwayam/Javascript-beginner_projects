const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];


 const getRandomNumber = () => {
    let random = Math.floor(Math.random() * hex.length)
    //console.log(random);
    return random;
}

let color = document.querySelector('.content__displayAns');
console.log(color);
const clickBtn = document.querySelector('.content__displayButton');



clickBtn.addEventListener("click", () => {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        let index = hex[getRandomNumber()];
        hexColor += index;    
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});





//console.log(Math.random() * 4);