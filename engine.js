// Creates grid by x*x.

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



// -----------------------------------------------------------------------------
// Adjusts the physical values of each box and set event listiner to each box.

function adjust() {

    // Box size values.

    console.log(number)
    var width = 100 / (number)
    var height = 100 / (number)
    console.log(width)

    const black = "black"

    // Gets reference of each box for loop.

    const nodelist = document.querySelectorAll(".cell");
    for (var i = 0; i < nodelist.length; i++) {

    // Sets each box a height / width / class / id / eventlistner for change color when hover over them.
    
    nodelist[i].setAttribute('style', `width: ${width}%; height: ${height}%`);
        nodelist[i].setAttribute('id', `${i+1}`)
        nodelist[i].classList.add('border-class')

        nodelist[i].addEventListener("mouseenter", (e) => {

        console.log(e.target.style.background = `${black}`);
        console.log(e.target);
        });
    };
};



// -----------------------------------------------------------------------------
// Removes each child (box) from parent div to clear container

function remove_childs() {

    // Gets reference of parent node

    const container = document.getElementById("container");

    // Gets reference of each box for loop

    const nodelist = document.querySelectorAll(".cell");
    for (var i = 0; i < nodelist.length; i++) {
        container.removeChild(nodelist[i])
    };
};



// ----------------------------------SLIDER-------------------------------------

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerText = slider.value;

slider.oninput = function() {
    output.innerText = this.value;
};

slider.addEventListener('change', (e) => {
    console.log(parseInt(e.target.value))
    var grid_value = parseInt(e.target.value)

    //  Removes childs for preventing overflow -> makes grid -> adjust the boxes.

    remove_childs()
    makeGrid(grid_value)
    adjust()
});



// --------------------------------BUTTONS--------------------------------------
// CLEAR BUTTON
// Cleans all boxes.

const clear = document.getElementsByClassName("clean")[0];
console.log(clear)


function clean (e) {
    const white = "white"
    e.style.background = `${white}`
};

clear.addEventListener("click", (e) => {

    // Gets reference of each box to clean.

    const nodelist = document.querySelectorAll(".cell");
    console.log(e.target);
    nodelist.forEach(clean);
});




// BORDER BUTTON
// Show or disappear the borders.

const borders = document.getElementsByClassName("border")[0];


function border_it (e) {
    e.classList.toggle("border-class")
};

borders.addEventListener("click", (e) => {

    // Gets reference of each box as an array to add or remove border.

    const nodelist = document.querySelectorAll(".cell");
    console.log(e.target);
    nodelist.forEach(border_it);
});




// COLORS BUTTON
// Sets random color for hoverd boxes.

const colors = document.getElementsByClassName("colors")[0];

function colorIt(){
    const nodelist = document.querySelectorAll(".cell");
    for (var i = 0; i < nodelist.length; i++) {

        function rand_colors () {
            const R = Math.floor(Math.random() * 255).toString();
            const G = Math.floor(Math.random() * 255).toString();
            const B = Math.floor(Math.random() * 255).toString();
            const RGBx =  "("+ R +", "+ G +", "+ B +")"
            return RGBx
        };
        
        nodelist[i].addEventListener("mouseenter", (e) => {
        var random_RGB = rand_colors()
        console.log(e.target.style.background = `rgb${random_RGB}`);
        console.log(e.target);
        });
    };
}

colors.addEventListener("click", colorIt);
