function getWeeklyHTML() {

    return /*HTML*/`
        <center>
        <div class="Weekly">
        ${createWeeklyHTML()}
        </div>
        </center>
    `;
}




function createWeeklyHTML(){
    weeklyId =  findThisWeek()
    return getDaysHTMLtest(weeklyId)
}


function getDaysHTMLtest(weekId) {
    let html = /*HTML*/`<div class='WeeklyContainer'>`;
    model.data.assignments.map(function (element) {
        if (element.weeksId === weekId) {
            html += /*HTML*/`
            <div id='day${element.id}' class='day'>
                <button class="leftBarWeekly" onclick='changeSelectedAssignment(${element.id})'>${element.name}</button><br/>
            </div>
            `;
        }
    });
    html += /*HTML*/`</div>`;
    return html;
}

