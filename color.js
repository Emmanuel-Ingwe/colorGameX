console.log("Connected");

// for (var i = 10; i <= 20; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

var colors = generateRandomcolors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];

    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.background;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!!";
            changeColors(clickedColor);
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomcolors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {

    }
    return arr;
}

function changeColors() {
    var r = Math.random(Math.random() * 256);
    var g = Math.random(Math.random() * 256);
    var b = Math.random(Math.random() * 256);
}