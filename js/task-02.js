const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('ul');

const makeItem = options => {
  return options.map(option => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.textContent = option;
    return itemEl;
  });
};

const elements = makeItem(ingredients);

list.append(...elements);