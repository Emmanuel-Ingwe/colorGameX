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
var h1 = document.querySelector("h1");


colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];

    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.background;
        console.log(clickedColor, pickedColor);
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!!";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
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
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    "rgb(r, g, b)";
    return "rgb(" + r + ", " + g + ", " + b + ")";
}