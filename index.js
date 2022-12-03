// Import stylesheets
import './style.css';

const listElements = document.querySelectorAll('li');

let total = 0;
listElements.forEach((listElem) => {
  total += listElem.offsetWidth;
});
console.log('total width of elem', total);
console.log('remainder', 960 - total);
console.log(
  'remainder split into 5 (growth factor: 2+ 1 + 1 + 1',
  (960 - total) / 5
);
const remainder = (960 - total) / 5;

const firstLi = document.querySelector('li:first-child');

console.log('width after flex grow of 2', firstLi.offsetWidth + remainder * 2);

document.querySelectorAll('li:not(:first-child)').forEach((listElem) => {
  console.log('width after flex grow of 1', listElem.offsetWidth + remainder);
});
