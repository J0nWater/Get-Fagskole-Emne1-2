show1()
function show1() {
    document.getElementById('app').innerHTML = /*HTML*/ `
        <h1>1</h1>
        <button onclick="show2()">Øke med én</button>
        <button onclick="show2()">Doble</button>
    `;
}

function show2() {
    document.getElementById('app').innerHTML = /*HTML*/ `
        <h1>2</h1>
        <button onclick="show3()">Øke med én</button>
        <button onclick="show4()">Doble</button>
    `;
}

function show3() {
    document.getElementById('app').innerHTML = /*HTML*/ `
        <h1>3</h1>
        <button onclick="show4()">Øke med én</button>
        <button onclick="show6()">Doble</button>
    `;
}

function show4() {
    document.getElementById('app').innerHTML = /*HTML*/ `
        <h1>4</h1>
        <button onclick="show5()">Øke med én</button>
        <button onclick="show8()">Doble</button>
    `;
}

function show5() {
    document.getElementById('app').innerHTML = /*HTML*/ `
        <h1>5</h1>
        <button onclick="show6()">Øke med én</button>
        <button onclick="show10()">Doble</button>
    `;
}

function show6() {
    document.getElementById('app').innerHTML = /*HTML*/ `
        <h1>6</h1>
        <button onclick="show7()">Øke med én</button>
        <button onclick="show12()">Doble</button>
    `;
}

function show7() {
    document.getElementById('app').innerHTML = /*HTML*/ `
        <h1>7</h1>
        <button onclick="show8()">Øke med én</button>
        <button onclick="">Doble</button>
    `;
}

function show8() {
    document.getElementById('app').innerHTML = /*HTML*/ `
        <h1>8</h1>
        <button onclick="show9()">Øke med én</button>
        <button onclick="">Doble</button>
    `;
}

function show9() {
    document.getElementById('app').innerHTML = /*HTML*/ `
        <h1>9</h1>
        <button onclick="show10()">Øke med én</button>
        <button onclick="">Doble</button>
    `;
}

function show10() {
    document.getElementById('app').innerHTML = /*HTML*/ `
        <h1>10</h1>
        <button onclick="show11()">Øke med én</button>
        <button onclick="">Doble</button>
    `;
}

function show11() {
    document.getElementById('app').innerHTML = /*HTML*/ `
        <h1>11</h1>
        <button onclick="show12()">Øke med én</button>
        <button onclick="">Doble</button>
    `;
}

function show12() {
    document.getElementById('app').innerHTML = /*HTML*/ `
        <h1>12</h1>
        <button onclick="">Øke med én</button>
        <button onclick="">Doble</button>
    `;
}

