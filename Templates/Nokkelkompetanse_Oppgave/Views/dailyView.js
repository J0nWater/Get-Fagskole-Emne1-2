function getDailyHTML() {
    if(model.data.assignments.length){
    return /*HTML*/`
        <center>
        <div class="Daily">
        ${getArrayObjectById(model.data.assignments, checkForDailyViewShow("today")).name} <button onclick="goToAssignments(${getArrayObjectById(model.data.assignments, checkForDailyViewShow('today')).id})">Go to</button><br>
        ${getArrayObjectById(model.data.assignments, checkForDailyViewShow("today")).text}
        </div>
        <br>
        <div class="Daily">
        ${getArrayObjectById(model.data.assignments, checkForDailyViewShow("yesterday")).name} <button onclick="goToAssignments(${getArrayObjectById(model.data.assignments, checkForDailyViewShow('yestarday')).id})">Go to</button><br>
        ${getArrayObjectById(model.data.assignments, checkForDailyViewShow("yesterday")).text}
        </div>
        </center>
    `;
} else {
    return /*HTML*/``;
}
}