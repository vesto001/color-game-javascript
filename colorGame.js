var difficulty = 6;
var colors = generateRandomColors(difficulty);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var titleDisplay = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

colorDisplay.textContent = pickedColor.toUpperCase();

for (var i = 0; i < modeButtons.length; i++) {
  modeButtons[i].addEventListener("click", function() {
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    difficulty = this.textContent === 'Easy' ? 3 : 6;

    reset();
  });
}

function reset() {
  colors = generateRandomColors(difficulty);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  titleDisplay.style.background = "steelblue";
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";

  for(var i = 0; i < squares.length; i++){
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
}

resetButton.addEventListener("click", function() {
  reset();
});

for(var i = 0; i < squares.length; i++){
  squares[i].style.background = colors[i];

  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.background ;

    if(clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct";
      changeColors(pickedColor);
      titleDisplay.style.background = clickedColor;
      resetButton.textContent = "Play Again?"
    }else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color) {
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(squareNum) {
  var arr = [];

  for(var i = 0; i < squareNum; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}
