const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');
let counterVal = document.getElementById('counter').value;
counterVal = 0;
counter.textContent = counterVal;



const countingDecrease = () => {
    counterVal--;
    counter.textContent = counterVal;
}

const resetCounter = () => {
    counterVal = 0;
    counter.textContent = counterVal;
}

const countingIncrease = () => {
    counterVal++;
    counter.textContent = counterVal;
}


decrease.addEventListener('click', countingDecrease);
reset.addEventListener('click', resetCounter);
increase.addEventListener('click', countingIncrease);
