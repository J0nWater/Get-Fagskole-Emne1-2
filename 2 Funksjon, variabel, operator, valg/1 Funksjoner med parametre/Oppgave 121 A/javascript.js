updateView();
function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <div class="inputs">
        <input id="inputX" type="number"/>
        <div>Position x</div>

        <input id="inputY" type="number"/>
        <div>Position y</div>

        <select id="figureBackground">
            <option value="yellow" style="background-color: yellow;">yellow</option>
            <option value="red" style="background-color: red;">red</option>
            <option value="lime" style="background-color: lime;">lime</option>
            <option value="purple" style="background-color: purple;">purple</option>
            <option value="cyan" style="background-color: cyan;">cyan</option>
        </select>
        <div>Backgound color</div>

        <select id="figureBorder">
            <option value="red" style="background-color: red;">red</option>
            <option value="yellow" style="background-color: yellow;">yellow</option>
            <option value="lime" style="background-color: lime;">lime</option>
            <option value="purple" style="background-color: purple;">purple</option>
            <option value="cyan" style="background-color: cyan;">cyan</option>
            <option value="blue" style="background-color: blue;">blue</option>
        </select>
        <div>Border color</div>
    </div>

    <button onclick="addCircleFromInput()">Add Circle</button>
    <button onclick="addRectangleFromInput()">Add rectangle</button>
    
    <svg id="mySvg"></svg>
    `;
}

function addCircleFromInput() {
    addCircle(
        document.getElementById('inputX').valueAsNumber,
        document.getElementById('inputY').valueAsNumber,
        document.getElementById('figureBackground').value,
        document.getElementById('figureBorder').value
    );
}

function addRectangleFromInput() {
    addRectangle(
        document.getElementById('inputX').valueAsNumber,
        document.getElementById('inputY').valueAsNumber,
        document.getElementById('figureBackground').value,
        document.getElementById('figureBorder').value
    );
}

function addCircle(positionX, positionY, background, borderColor) {
    document.getElementById('mySvg').innerHTML = /*HTML*/`
        <circle cx="${positionX}" cy="${positionY}" r="40" stroke="${borderColor}" stroke-width="4" fill="${background}"/>
    `;
}

function addRectangle(positionX, positionY, background, borderColor) {
    document.getElementById('mySvg').innerHTML = /*HTML*/`
        <rect x="${positionX}" y="${positionY}" width="60" height="60" stroke="${borderColor}" stroke-width="4" fill="${background}"/>
    `;
}