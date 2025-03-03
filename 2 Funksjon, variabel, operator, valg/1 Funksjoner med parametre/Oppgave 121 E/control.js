updateView();
function updateView() {
    createHouseHtml('green', '', 1);
    createBoxHtml('square-one', 'green', 1);
    createBoxHtml('square-two', 'green', 1);
    createBoxHtml('square-three', 'green', 1);
    createBoxHtml('square-four', 'green', 1);

    createHouseHtml('yellow', 'right: 0', 2);
    createBoxHtml('square-one', 'yellow', 2);
    createBoxHtml('square-two', 'yellow', 2);
    createBoxHtml('square-three', 'yellow', 2);
    createBoxHtml('square-four', 'yellow', 2);

    createHouseHtml('red', 'bottom: 0', 3);
    createBoxHtml('square-one', 'red', 3);
    createBoxHtml('square-two', 'red', 3);
    createBoxHtml('square-three', 'red', 3);
    createBoxHtml('square-four', 'red', 3);

    createHouseHtml('blue', 'bottom: 0;right: 0', 4);
    createBoxHtml('square-one', 'blue', 4);
    createBoxHtml('square-two', 'blue', 4);
    createBoxHtml('square-three', 'blue', 4);
    createBoxHtml('square-four', 'blue', 4);
}

function createHouseHtml(houseColor, housePosition, houseId) {
    document.getElementById('app').innerHTML += /*HTML*/`
        <div class="house ${houseColor}" style="${housePosition}">
            <div id="box${houseId}" class="box"></div>
        </div>
    `;
}

function createBoxHtml(squareNumber, squareColor, boxId) {
    document.getElementById('box'+ boxId).innerHTML += /*HTML*/`
        <div class="square ${squareNumber} ${squareColor}"></div>
    `;    
}