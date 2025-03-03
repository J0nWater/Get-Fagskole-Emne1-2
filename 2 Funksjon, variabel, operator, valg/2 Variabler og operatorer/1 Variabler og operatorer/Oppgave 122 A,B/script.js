let selectedSquareIndex = 0;
const size = 64;

showBoard();
function showBoard() {
    // del 1: alle rutene som ikke er valgt før den valgte
    document.getElementById('board').innerHTML = ''
    const lengthPart1 = selectedSquareIndex;
    addEmptyBoxes(lengthPart1);
    
    // del 2: den valgte ruten
    const part2 = '<div class="selected"></div>';
    document.getElementById('board').innerHTML += part2;

    // del 3  alle rutene som ikke er valgt etter den valgte
    const lengthPart3 = size - (selectedSquareIndex + 1);
    addEmptyBoxes(lengthPart3);    
    
    document.getElementById('app').innerHTML = /*HTML*/`
    <button onclick="changeSelectedPosition(-8)" style="grid-area: up;">▲</button>
    <button onclick="changeSelectedPosition(-1)" style="grid-area: left;">◀</button>
    <button onclick="changeSelectedPosition(+1)" style="grid-area: right;">▶</button>
    <button onclick="changeSelectedPosition(+8)" style="grid-area: down;">▼</button>
    `;
}

    function changeSelectedPosition(position){
        selectedSquareIndex += position;
        if(isOutOfBounds()){
            selectedSquareIndex -= position;
        }
        showBoard();
        console.log(selectedSquareIndex) 
    }

    function isOutOfBounds(){
        let minPosition = 0;
        return selectedSquareIndex < minPosition || selectedSquareIndex > size - 1
    }

    function addEmptyBoxes(amount){
        const pattern = '<div></div>';
        document.getElementById('board').innerHTML += ''.padEnd(pattern.length * amount, pattern)
    }



