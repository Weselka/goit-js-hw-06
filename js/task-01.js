
const ulEl = document.querySelector('#categories');
const allItemCategory = ulEl.children;
console.log('Number of categories:', allItemCategory.length);

for (let i = 0; i < allItemCategory.length; i += 1) {
  const categoryTitle = allItemCategory[i].firstElementChild.textContent;
  const elQuantity = allItemCategory[i].lastElementChild.children.length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elQuantity}`);
}