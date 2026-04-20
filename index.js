const container = document.querySelector('#container');
const button = document.querySelector('button');

let squares = 16;

function createGrid(size) {
  size *= size;
  for (let i = 0; i < size; i++) {
    let square = document.createElement('div');
    square.style.width = `${100 / Math.sqrt(size)}%`;
    square.classList.add('square');
    container.appendChild(square);

    square.addEventListener('mouseover', () => {
      square.classList.toggle('color');
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

button.addEventListener('click', () => {
  const input = parseInt(document.querySelector('input').value, 10);
  console.log(typeof input);
  if (!input || input < 1 || input > 100) {
    alert('please enter a number between 1 and 100');
  } else {
    deleteGrid();
    createGrid(input);
  }
});
