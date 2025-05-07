function showAssignmentsLeftBarView() {
    

    
    if(model.app.editView) {
        return getTermsHTML();
    }
    else {
        copyTermsWeeksAssignments();
        return getTermsHTML();
    }
}

function getAssignmentTextHTML() {
    let html = "";
    if(model.app.selectedAssignmentId){
        html = /*HTML*/ `<div class="assignmentTextContainer">`
        if(canEdit()){
            html += /*HTML*/`
                <h1>${model.app.selectedAssignmentId ? getArrayObjectById(model.app.tempAssignment, model.app.selectedAssignmentId).name : "&nbsp;"}</h1> 
                <input type="datetime-local" value="${model.app.selectedAssignmentId ? getArrayObjectById(model.app.tempAssignment, model.app.selectedAssignmentId).date : "&nbsp;"}" onchange="model.inputs.assignments.date = this.value">
                <br>
                <textarea ${model.inputs.assignments.text ? '' : 'placeholder="enter assignment text"'} rows="10" cols="70" onchange="model.inputs.assignments.text = this.value">${model.inputs.assignments.text || ''}</textarea>
                <button onclick="saveEditAssignment()">Save</button>
        `; } else {
            html += /*HTML*/`
                <h1>${model.app.selectedAssignmentId ? getArrayObjectById(model.data.assignments, model.app.selectedAssignmentId).name : "&nbsp;"} </h1>
                <p>${model.app.selectedAssignmentId ? getArrayObjectById(model.data.assignments, model.app.selectedAssignmentId).text : "&nbsp;"} </p>
        `;
        }
        html += /*HTML*/`</div>`
    }
    return html;
}


function getTermsHTML() {
    let editView = model.app.editView
    let html = `<div id='termContainer' class='termContainer'>`;
    const terms = getTermsAllowed();
    terms.map(element => {
        html += /*HTML*/`
        <div id='term${element.id}' class='terms'>
        <button class="leftBarTerm" onclick="changeSelectedTerm(${element.id})">
            ${element.name}
        </button>
        ${editView ? /*HTML*/`<button onclick="deleteTerm(${element.id})">❌</button>` : ''}
        </div>
        `;
   
    
    if(model.app.selectedTermId === element.id || canEdit()) {
        html += getWeeksHTML(element)};
 });

    html += /*HTML*/`</div>`
    if (canEdit()) {
        html += /*HTML*/ `<button class="leftBarEdit" onclick="createNewTerms()">New Term</button>
                            <button class="leftBarEdit" onclick="saveAllAssignmentChanges()">Save</button>
                            <button class="leftBarCancel" onclick="cancelAssignmentChanges()">Cancel</button></div>`
    } else if (isAdmin()) {
        html += /*HTML*/`<button class="leftBarEdit" onclick="editViewActive()">Rediger</button></div>`
    } else {
        html += /*HTML*/ `</div>`
    }
    return html;
}


function getWeeksHTML(term) {
    let editView = model.app.editView
    let html = /*HTML*/`<div id='weekContainer${term.id}' class='weekContainer'>`;
    const weeks = getWeeksAllowed();
    weeks.map(element => {
        if (element.emneId === term.id) {
            html += /*HTML*/`
            <div id='week${element.id}' class='week'>
                <button class="leftBarWeek" onclick='changeSelectedWeek(${element.id}), showMainView()'>${element.name}</button>
                ${editView ? /*HTML*/`<button onclick="deleteWeek(${element.id})">❌</button>` : ''}
            </div>
            `;
            if(model.app.selectedWeekId === element.id || canEdit()) {
            html += getDaysHTML(element)};
        }
     });
    if (editView && isAdmin()) {
        html += /*HTML*/ `<button class="leftBarEdit" onclick="createNewWeek(${term.id}, '${getNewIsoDate(getNewestDate().date)}')">New Week</button></div>`
    } else  {
        html += /*HTML*/`</div>`
}
return html;
}

function getDaysHTML(week) {
    let html = /*HTML*/`<div id='dayContainer${week.id}' class='dayContainer'>`;
    const assignments = getDaysAllowed();
    assignments.map(element => {
        if (element.weeksId === week.id) {
            html += /*HTML*/`
            <div id='day${element.id}' class='day'>
                <button class="leftBarDay"onclick='changeSelectedAssignment(${element.id})'>${element.name}</button><br/>
            </div>
            `;
        }
    });
    html += /*HTML*/`</div>`;
    return html;
}

function getUserNote() {
    if (loggedIn()) {
        let assignmentId = model.app.selectedAssignmentId;
        let userId = model.app.loggedInUserId;
        let html = ``;
        model.data.userNotes.map(element => {
            if (element.userId === userId && element.assignmentId === assignmentId) {
                html = /*HTML*/`
                <center><h2>Notes</h2></center>
                <input class="userNote" value="${model.inputs.notes.text ? model.inputs.notes.text : element.text }" onChange="model.inputs.notes.text = this.value">
                ${isAdmin() ? `<h2>Elever rater : ${getAverageRating()}</h2>` : `<input type="range" value="${model.inputs.notes.rating ? model.inputs.notes.rating : element.rating}" min=1 max=5 onChange="changeRating(this.value)"><p>${model.inputs.notes.rating ? model.inputs.notes.rating : "1-5"}</p>`}
                <button onclick="editNotes()">Save</button>
                `;
            }
        });
        return html;
    }
    return ``;
}


