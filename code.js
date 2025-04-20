
// defining constants
const gridContainerRef = document.querySelector("#grid-container");
const MAX_ROWS = 16;
const MAX_COLS = 16;

// creating new divs (according to MAX_ROWS and MAX_COLS)
for (let rowNum = 1; rowNum <= MAX_ROWS; rowNum++){
    for (let colNum = 1; colNum <= MAX_COLS; colNum++){
        const newDiv = document.createElement("div");
        newDiv.setAttribute("id", rowNum + "," + colNum);
        newDiv.setAttribute("class", "item");
        gridContainerRef.appendChild(newDiv);
    }
}
