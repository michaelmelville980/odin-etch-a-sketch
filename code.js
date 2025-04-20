
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

// adding event listener that changes grid color when user hovers over item
gridContainerRef.addEventListener("mouseover", e => {

    //identifying item hovered over
    const hoveredItem = e.target;

    //changing color
    hoveredItem.style.backgroundColor = "blue";
})

