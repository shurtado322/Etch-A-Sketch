const grid = document.querySelector(".gridContainer");
const userInput = document.getElementById("quantity");
const resetButton = document.querySelector(".reset");

createGrid = () => {
    for (let i = 0; i < 256; i++){
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
    }
};

updateGrid = () => {
    grid.innerHTML = "";
    grid.style.setProperty("grid-template-columns",
        `repeat(${userInput.value}, 2fr)`);
    
    grid.style.setProperty("grid-template-rows",
        `repeat(${userInput.value}, 2fr)`);

    for (let i = 0; i < userInput.value * userInput.value; i++){
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
    }
};

const square = document.querySelector(".gridContainer");
square.addEventListener("mouseover", function(event) {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    event.target.style.backgroundColor = "#" + randomColor;
});

userInput.addEventListener("change", updateGrid);

resetButton.addEventListener("click", function() {
    grid.innerHTML = "";
    userInput.value = "";
    grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
    createGrid();
});

createGrid();
