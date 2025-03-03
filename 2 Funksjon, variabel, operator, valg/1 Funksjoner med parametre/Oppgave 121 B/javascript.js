updateview();
function updateview() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <div class="inputs">
        <div>Day</div>
        <input id="day" type="number">
        
        <div>Time</div>
        <input id="hour" type="number">
        
        <div>Minutt</div>
        <input id="min" type="number">
        
        <div>Temperatur</div>
        <input id="temperature" type="number">

        <button onclick='addResults()'>Add row</button>
    </div>
    
        <table id="myTable">
        <tr>
            <th>Dag</th>
            <th>Time</th>
            <th>Minutt</th>
            <th>Temperatur</th>
        </tr>

    </table>    
    `;
}

function addResults() {
    addRow(
        document.getElementById('day').value,
        document.getElementById('hour').value,
        document.getElementById('min').value,
        document.getElementById('temperature').value
    );
}

function addRow(day, hour, min, temperature) {
    document.getElementById('myTable').innerHTML += /*HTML*/`
    <tr>
        <td>${day}</td>
        <td>${hour}</td>
        <td>${min}</td>
        <td>${temperature}</td>
    </tr>
    
    `;
}
