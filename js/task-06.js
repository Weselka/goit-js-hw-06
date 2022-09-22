const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const inputValue = event.currentTarget.value.trim();
  const inputAtribute = Number(input.getAttribute('data-length'));

  if (inputAtribute === inputValue.length) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');    
  }
}
