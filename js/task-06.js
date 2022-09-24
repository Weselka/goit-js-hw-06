const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const inputValue = event.currentTarget.value.trim();
  const inputAtribute = Number(input.getAttribute('data-length'));
  replaceClassList('invalid', 'valid');
  if (inputAtribute === inputValue.length) {
    replaceClassList('valid', 'invalid');
  }
  if (inputValue.length === 0) {
    removeAllList('valid', 'invalid');
  }
}

const replaceClassList = (add, remove) => {
  input.classList.remove(remove);
  input.classList.add(add);
};

const removeAllList = (one, two) => {
  input.classList.remove(one);
  input.classList.remove(two);
};

// function onInputBlur(event) {
//   const inputValue = event.currentTarget.value.trim();
//   const inputAtribute = Number(input.getAttribute('data-length'));

//   if (inputAtribute === inputValue.length) {
//     input.removeAttribute('class');
//     input.classList.add('valid');
//   } else {
//     input.removeAttribute('class');
//     input.classList.add('invalid');
//   }
// }
