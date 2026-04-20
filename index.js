const container = document.querySelector('#container');
const sizeButton = document.querySelector('#size');
const blackButton = document.querySelector('#black');
const randomButton = document.querySelector('#random');
const darkerButton = document.querySelector('#darker');

let squares = 16;
let brush = 'black';

function createGrid(size) {
  size *= size;
  for (let i = 0; i < size; i++) {
    let square = document.createElement('div');
    square.style.width = `${100 / Math.sqrt(size)}%`;
    square.classList.add('square');
    container.appendChild(square);

    square.addEventListener('mouseover', () => {
      switch (brush) {
        case 'black':
          square.classList.add('color');
          console.log('hello');
          break;
        case 'random':
          console.log(Math.floor(Math.random() * 255));
          square.style.backgroundColor = `rgb(${Math.floor(
            Math.random() * 255
          )} ${Math.floor(Math.random() * 255)} ${Math.floor(
            Math.random() * 255
          )})`;
          break;
        case 'darker':
          square.classList.add('color');
          if (!square.style.opacity) {
            square.style.opacity = '0.1';
          } else {
            square.style.opacity = `${parseFloat(square.style.opacity) + 0.1}`;
          }
          break;
      }
    });
  }
}

function deleteGrid() {
  let divs = container.querySelectorAll('div');
  divs.forEach((div) => {
    container.removeChild(div);
  });
}

createGrid(squares);

sizeButton.addEventListener('click', () => {
  const input = parseInt(document.querySelector('input').value, 10);
  if (!input || input < 1 || input > 100) {
    alert('please enter a number between 1 and 100');
  } else {
    deleteGrid();
    createGrid(input);
  }
});

blackButton.addEventListener('click', () => (brush = 'black'));

randomButton.addEventListener('click', () => (brush = 'random'));

darkerButton.addEventListener('click', () => (brush = 'darker'));
