// Import stylesheets
import './style.css';

const listElements = document.querySelectorAll('li');

let total = 0;
listElements.forEach((listElem) => {
  total += listElem.offsetWidth;
});
console.log('total width of elem', total);
console.log('remainder', 960 - total);
console.log('remainder split into 4', (960 - total) / 4);

listElements.forEach((listElem) => {
  console.log(
    'width after flex grow of 1',
    listElem.offsetWidth + (960 - total) / 4
  );
});
