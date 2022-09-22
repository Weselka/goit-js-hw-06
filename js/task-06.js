// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  console.log('фокуса нет на инпуте');
  const inputValue = event.currentTarget.value.length;
  const inputAtribute = input.getAttribute('data-length');

  if (inputAtribute == inputValue) {
    input.classList.add('valid');
  } else {
    input.classList.add('invalid');
  }
    console.log(inputAtribute == inputValue);
    console.log(inputAtribute, inputValue);
}
