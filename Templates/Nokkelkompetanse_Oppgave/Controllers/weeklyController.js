
function findThisWeek() {
    const todaysId = checkForDailyViewShow("today")
    for(let assignment of model.data.assignments){
        if(assignment.id == todaysId){
            return assignment.weeksId
        }
    }
}