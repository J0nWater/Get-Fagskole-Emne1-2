//Model
let currentFontSize = 30;
let redValue = 255;
let greenValue = 0;
let blueValue = 0;

//View
updateView()
function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <button onclick="changeFontSize(-5)">Decrease Font size</button>
    <button onclick="changeFontSize(+5)">Increase Font size</button>
    
    <select onchange="selectFontFamily(this.value)">
        <option>Select Font</option>
        <option >Arial</option>
        <option >Verdana</option>
        <option>Tahoma</option>
        <option>Trebuchet MS</option>
        <option>Times New Roman</option>
        <option>Georgia</option>
        <option>Garamond</option>
        <option>Courier New</option>
        <option>Brush Script MT</option>
    </select>
    <br><br>

    <div>Change background color</div>
    <div>Red
        <button onclick="changeBackgroundColor(-15, 0, 0)">-</button>
        <button onclick="changeBackgroundColor(15, 0, 0)">+</button>
    </div>
    <div>Green
        <button onclick="changeBackgroundColor(0, -15, 0)">-</button>
        <button onclick="changeBackgroundColor(0, 15, 0)">+</button>
    </div>
    <div>Blue
        <button onclick="changeBackgroundColor(0, 0, -15)">-</button>
        <button onclick="changeBackgroundColor(0, 0, 15)">+</button>
    </div>
    <br>

    <div id="textId" style="font-size: 30pt; background-color: red">God dag!!!</div>
    `;
}

//Controller
function changeFontSize(fontSizeValue) {
    currentFontSize += fontSizeValue;
    document.getElementById('textId').style.fontSize = `${currentFontSize}pt`;
}

function selectFontFamily(fontFamilyValue) {
    document.getElementById('textId').style.fontFamily = `${fontFamilyValue}`;
}

function changeBackgroundColor(red, green, blue) {
    redValue += red;
    redValue += red;
    
    greenValue += green;
    greenValue += green;
    
    blueValue += blue;
    blueValue += blue;
    
    redValue = redValue <= 0 ? 0 : redValue >= 255 ? 255 : redValue;
    greenValue = greenValue <= 0 ? 0 : greenValue >= 255 ? 255 : greenValue;
    blueValue = blueValue <= 0 ? 0 : blueValue >= 255 ? 255 : blueValue;

    document.getElementById('textId').style.backgroundColor = /*HTML*/`rgb(${redValue},${greenValue},${blueValue})`

    console.log('red', redValue, 'green', greenValue, 'blue', blueValue)
}
