// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


// const decrement = counterValue--;
// console.log(counterValue);
// const increment = counterValue++;
// console.log(counterValue);

const decrementBtn = document.querySelector('[data-action="decrement"]');
console.log(decrementBtn);
const resultClick = document.querySelector('#value');
console.dir(resultClick);
const incrementBtn = document.querySelector('[data-action="increment"]');
console.log(incrementBtn);

decrementBtn.addEventListener('click', onDecrementBtnClick);

incrementBtn.addEventListener('click', onDecrementBtnClick);

function onDecrementBtnClick(event) {
    const direction = this.dataset.direction;
    
    const span = this.parentElement.querySelector('#value');
    const currentValue = +span.textContent;
    let counterValue = 0; 
    if (direction === 'decrement') {
        counterValue = currentValue + 1;
    } else {
        counterValue = currentValue - 1;
    }
    console.log('Клік');
    return (span.textContent = counterValue);
}

function addOrRemoveNumber(event) {
  console.log('Клік по кнопці');
}
