let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
console.log(decrementBtn);

const incrementBtn = document.querySelector('[data-action="increment"]');

let resultClick = document.querySelector('#value');
console.dir(resultClick);

decrementBtn.addEventListener('click', () => {
    resultClick.textContent = counterValue -= 1;
});

incrementBtn.addEventListener('click', () => {
    resultClick.textContent = counterValue += 1;
});