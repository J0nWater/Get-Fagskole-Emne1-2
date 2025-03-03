red()
function red() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <div onclick="redYellow()" class="trafficLight">
        <div class="light" style="background-color: red;"></div>
        <div class="light" style="background-color: grey;"></div>
        <div class="light" style="background-color: grey;"></div>
    </div>
    
    `;
}

function redYellow() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <div onclick="green()" class="trafficLight">
        <div class="light" style="background-color: red;"></div>
        <div class="light" style="background-color: yellow;"></div>
        <div class="light" style="background-color: grey;"></div>
    </div>
    
    `;
}

function green() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <div onclick="yellow()" class="trafficLight">
        <div class="light" style="background-color: grey;"></div>
        <div class="light" style="background-color: grey;"></div>
        <div class="light" style="background-color: green;"></div>
    </div>
    
    `;
}

function yellow() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <div onclick="red()" class="trafficLight">
        <div class="light" style="background-color: grey;"></div>
        <div class="light" style="background-color: yellow;"></div>
        <div class="light" style="background-color: grey;"></div>
    </div>
    
    `;
}