const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const inputValue = event.currentTarget.value.length;
  const inputAtribute = Number(input.getAttribute('data-length'));
  replaceClassList('invalid', 'valid');
  if (inputAtribute === inputValue) {
    replaceClassList('valid', 'invalid');
  }
  if (inputValue === 0) {
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