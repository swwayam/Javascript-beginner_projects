// when you press the decrease button the counter must be decreased by 1
// when you press the reset button the counter must be set to zero.
// when you press the increase button the counter must be increased by 1


// Selectors
const decrease = document.querySelector('.decrease');

const reset = document.querySelector('.reset');

const increase = document.querySelector('.increase');

const count = document.querySelector('.count');


// Decrease button
const decreaseCount = () => {
    let counter = count.textContent;
    counter--;
    count.textContent = counter;
}

// reset button
const resetCount = () => {
    count.textContent = 0;
}

// increase button
const increaseCount = () => {
    let counter = count.textContent;
    counter++;
    count.textContent = counter;
}

// EventListners
decrease.addEventListener('click', decreaseCount);

reset.addEventListener('click', resetCount);

increase.addEventListener('click', increaseCount)