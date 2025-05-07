function setPage(pageName) {
    model.app.page = pageName;
    model.app.editView = false;
    model.app.selectedAssignmentId = null;
    model.app.selectedTopicId = null;
    model.app.selectedSubTopicId = null;
    model.app.selectedTermId = null,
    model.app.selectedWeeksId = null,
    updateView();
}

function updateView() {
    showMainView();
}

function getArrayObjectById(array, inputId) {
    let index = array.map(function (element) {
        return element.id;
    }).indexOf(inputId);
    return array[index];
}

function createNotes() {
    model.data.userNotes.push({ id: getNextId(model.data.userNotes), assignmentId: model.app.selectedAssignmentId, userId: model.app.loggedInUserId, text: "", rating: null })
}

function editNotes() {

    let assignmentId = model.app.selectedAssignmentId;
    let userId = model.app.loggedInUserId;
   
    return model.data.userNotes.find(element => {
        if (element.assignmentId === assignmentId
            && element.userId === userId) {
                element.text = model.inputs.notes.text
                element.rating = model.inputs.notes.rating
        } 
        
    })
}

function checkUserNote() {
    let assignmentId = model.app.selectedAssignmentId;
    let userId = model.app.loggedInUserId;
   
    return model.data.userNotes.find(element => {
        if (element.assignmentId === assignmentId
            && element.userId === userId) {
          return true; 
        } 
        
    })
}

function getNextId(Seleceted) {
    let maxId = 0;
    for (const data of Seleceted) {
        if (data.id > maxId) {
            maxId = data.id;
        }
    }

    return maxId + 1;
}


function checkGroupType(userId){
    let user = getArrayObjectById(model.data.users, userId)
        if(user.typeId == 1 ){
            return true;
        }
        return false;
}


function loggedIn() {
    return model.app.loggedInUserId !== null;
}


function getCurrentLoggedInUser() {
    return model.data.users.find(user => user.id == model.app.loggedInUserId);
}


function editViewActive() {
    model.app.editView = true;
    updateView();
  }


function changeRating(rating) {
    model.inputs.notes.rating = rating
    updateView()
}