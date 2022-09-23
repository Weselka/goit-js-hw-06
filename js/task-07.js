// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

inputRef: document.querySelector('#font-size-control');

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
//   let inputName = event.currentTarget.value;
//   if (inputName.trim() === '') {
//     refs.nameLabel.textContent = 'Anonymous';
//   } else {
//     refs.nameLabel.textContent = inputName;
//   }
}