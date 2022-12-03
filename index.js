// Import stylesheets
import './style.css';

const listElements = document.querySelectorAll('li');

let total = 0;
listElements.forEach((listElem) => {
  total += listElem.offsetWidth;
});
console.log('total width of elem', total);
console.log('remainder', 960 - total);

const remainder = (960 - total) / 6;
console.log('remainder split into 4', remainder);

const firstLi = document.querySelector('li:first-child');

console.log(
  'width after flex grow of for first elemen',
  firstLi.offsetWidth + remainder * 3
);

document.querySelectorAll('li:not(:first-child)').forEach((listElem) => {
  console.log('width after flex grow of 1', listElem.offsetWidth + remainder);
});
