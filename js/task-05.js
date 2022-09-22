const refs = {
  input: document.querySelector('#name-input'),
  nameLabel: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  let inputName = event.currentTarget.value;
  if (inputName.trim() === '') {
    refs.nameLabel.textContent = 'Anonymous';
  } else {
    refs.nameLabel.textContent = inputName;
  }
}
