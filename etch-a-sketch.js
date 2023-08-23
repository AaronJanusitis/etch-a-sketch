function createSquares() {
    sketchAreaContainer.innerHTML = '';
    
    let boxesNumber = boxesGrid * boxesGrid;

    sketchAreaContainer.style.gridTemplateColumns = `repeat(${boxesGrid}, 1fr)`;
    sketchAreaContainer.style.gridTemplateRows = `repeat(${boxesGrid}, 1fr)`;

    for(let i = 0; i < boxesNumber; i++) {
        const sketchBox = document.createElement('div');
        sketchBox.classList.add('boxes');
        sketchAreaContainer.appendChild(sketchBox);
    }
    
    let gridPixels = sketchAreaContainer.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', colorGrid));
}

function colorGrid() {
    if(penColor == "black") {
        this.style.backgroundColor = "black";
    }
    else if(penColor == "rainbow") {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        console.log(randomColor);
        this.style.backgroundColor = randomColor;
    }
    else {
        console.log("No pen color set.");
    }
    
}

let boxesGrid = 16;
let penColor = "black";
const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
const sketchAreaContainer = document.querySelector('.sketch-area');
const gridSizeButton = document.querySelector('#grid_size_button');
const resetButton = document.querySelector('#reset_button');
const blackButton = document.querySelector('#black_pen');
const rainbowButton = document.querySelector('#rainbow_pen');

gridSizeButton.addEventListener('click', () => {
    if (document.getElementById('grid_size_input').value < 101 && document.getElementById('grid_size_input').value > 0) {
        boxesGrid = document.getElementById('grid_size_input').value;
        createSquares();
    }
    else {
        window.alert("Input must be between 1 and 100.");
    }    
});

resetButton.addEventListener('click', () => {
    createSquares();  
});

blackButton.addEventListener('click', () => {
    penColor = "black";
});

rainbowButton.addEventListener('click', () => {
    penColor = "rainbow";
});

createSquares();
