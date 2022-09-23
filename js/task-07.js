const refs = {
  inputRange: document.querySelector('#font-size-control'),
  spanText: document.querySelector('#text'),
};

refs.inputRange.addEventListener('input', onInputChange);

function onInputChange(event) {      
    refs.spanText.style.fontSize = refs.inputRange.value + 'px';
}