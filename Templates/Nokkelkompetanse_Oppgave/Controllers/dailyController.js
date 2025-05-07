function checkForDailyViewShow(selected) {
    let nowTime = new Date();
    let dailyAssignment = null;
    let dailyAssignmentId = null;
    for(let date of model.data.assignments){
        if(nowTime > new Date(date.date) && new Date(date.date) > new Date(dailyAssignment)){
            nextLastAssignmentId = dailyAssignmentId
            dailyAssignment = date.date
            dailyAssignmentId = date.id
        }
    }
    if(selected == "today"){
        return dailyAssignmentId
    } else {
        return nextLastAssignmentId
    }
}

function goToAssignments(assignmentsId){
    model.app.page = "assignment";
    model.app.selectedAssignmentId = assignmentsId;
    updateView()
}