const refs = {
  body: document.querySelector('body'),
  spanValue: document.querySelector('.color'),
  btnChangeColor: document.querySelector('.change-color'),
};

refs.btnChangeColor.addEventListener('click', onClickChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)}`;
}

function onClickChangeColor(event) {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.spanValue.replaceChildren(getRandomHexColor(toString));
}
