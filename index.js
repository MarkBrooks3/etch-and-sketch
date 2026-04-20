const container = document.querySelector('#container');
const SQUARES = 16 * 16;
container.style.width = `${Math.sqrt(SQUARES) * 30}px`;

for (let i = 0; i < SQUARES; i++) {
  let square = document.createElement('div');
  square.classList.add('square');
  container.appendChild(square);
}
