const container = document.querySelector('#container');
let squares = 20 * 20;

for (let i = 0; i < squares; i++) {
  let square = document.createElement('div');
  square.style.width = `${100 / Math.sqrt(squares)}%`;
  square.classList.add('square');
  container.appendChild(square);

  square.addEventListener('mouseover', () => {
    square.classList.toggle('color');
  });
}
