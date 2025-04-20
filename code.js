
// initializing references
const gridContainerRef = document.querySelector("#grid-container");
const button = document.querySelector("button");




// function to create grid html divs
const createGrid = function(gridSize){
    for (let rowNum = 1; rowNum <= gridSize; rowNum++){
        for (let colNum = 1; colNum <= gridSize; colNum++){
            const newDiv = document.createElement("div");
            newDiv.setAttribute("id", rowNum + "," + colNum);
            newDiv.setAttribute("class", "item");
            gridContainerRef.appendChild(newDiv);
        }
    }
    
}




// adding event listener that creates grid when user clicks button
button.addEventListener("click", e => {

    // deleting existing children
    gridContainerRef.replaceChildren();

    // resetting background color
    gridContainerRef.style.backgroundColor = "";

    // prompting for grid size
    let gridSize = prompt("Enter the grid size (1-100)");
    if (gridSize > 100){
        gridSize = 100;
    }

    // creating new grid
    createGrid(gridSize);

    // updating CSS flex-basis
    gridContainerRef.style.setProperty("--cols", gridSize);
})




// adding event listener that changes grid color when user hovers over item
gridContainerRef.addEventListener("mouseover", e => {
    const hoveredItem = e.target;
    if (hoveredItem !== gridContainerRef){
        hoveredItem.style.backgroundColor = "blue";
    }
})




// adding initial case (grid = 1 child div)
createGrid(1);

