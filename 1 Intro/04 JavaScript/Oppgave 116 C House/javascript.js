updateView()
function updateView() {
    document.getElementById('app').innerHTML = /*Html*/`
        <div>You are outside an apartment</div>
        <br>
        <button onclick="hallway()">enter the house</button>
    
    `;
}

function hallway() {
    document.getElementById('app').innerHTML = /*Html*/`
        <div>You are in the hallway</div>
        <br>
        <button onclick="updateView()">go outside</button>
        <button onclick="livingRoom()">go to the living room</button>
        <button onclick="kitchen()">go to the kitchen</button>
        <button onclick="bathroom()">go to the bathroom</button>
    `;
}

function livingRoom() {
    document.getElementById('app').innerHTML = /*Html*/`
        <div>You are in the living room</div>
        <br>
        <button onclick="hallway()">go to the hallway</button>
        <button onclick="kitchen()">go to the kitchen</button>
    `;
}

function kitchen() {
    document.getElementById('app').innerHTML = /*Html*/`
        <div>You are in the kitchen</div>
        <br>
        <button onclick="hallway()">go to the hallway</button>
        <button onclick="livingRoom()">go to the living room</button>
    `;
}

function bathroom() {
    document.getElementById('app').innerHTML = /*Html*/`
        <div>You are in the bathroom</div>
        <br>
        <button onclick="hallway()">go to the hallway</button>
    `;
}