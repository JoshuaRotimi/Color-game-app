

let numSquares = 6;
let colors = generateRandomColors(numSquares);

let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.querySelector('#colorDisplay');
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let easybtn = document.querySelector('#easybtn');
let hardbtn = document.querySelector('#hardbtn');



easybtn.addEventListener('click', function () {
  easybtn.classList.add('selected');
  hardbtn.classList.remove('selected');
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i <squares.length ; i++) {
    if (colors[i]){
    squares[i].style.background = colors[i];}
    else squares[i].style.display = 'none';

  }

});


hardbtn.addEventListener('click', function () {
  hardbtn.classList.add('selected');
  easybtn.classList.remove('selected');
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i <squares.length ; i++) {
      squares[i].style.background = colors[i];
      squares[i].style.display = 'block';
  }

});



function resetMe(){
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = '';
  for (let i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];
  }
  h1.style.background = 'steelblue';
  resetButton.textContent = 'New Colors';
}

resetButton.addEventListener('click', resetMe);

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];

  squares[i].addEventListener('click', function () {
    let clickedColor = this.style.background;
    console.log(clickedColor, pickedColor);
    if (clickedColor === pickedColor){
      messageDisplay.textContent = ('Correct!');
      resetButton.textContent = 'Play Again?';
      changeColors(clickedColor);
      h1.style.background = clickedColor;

    } else {
      this.style.background = '#232323';
      messageDisplay.textContent = 'Try Again!';

    }
  })
}

function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }

}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  let arr =[];
  for (let i = 0; i < num; i++) {
    arr.push(randomColor())
  }
  return arr;
}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";

}
