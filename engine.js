const container = document.getElementById("container");
var number = 0
function makeGrid(x) {
    number = (x)
    console.log(number)
    for (i = 0; i < (x*x); i++) {
        let cell = document.createElement("div");
        cell.innerText = ("");
        container.appendChild(cell).className = "cell" 
    };

};

makeGrid(2)

console.log(number)
var width = 100 / (number)
var height = 100 / (number)
console.log(width)
const nodelist = document.querySelectorAll(".cell");

for (var i = 0; i < nodelist.length; i++) {
    nodelist[i].setAttribute('style', `width: ${width}%; height: ${height}%`);
};
