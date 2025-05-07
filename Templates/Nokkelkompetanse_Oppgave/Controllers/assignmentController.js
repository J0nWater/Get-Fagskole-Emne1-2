function createNewTerms() {
  const NewId = getNextId(model.data.terms);
  model.app.tempTerm.push({ id: NewId, name: 'emne ' + NewId })
  createNewWeek(NewId, getNewIsoDate(getNewestDate().date ? getNewestDate().date : new Date()))
}

function createNewWeek(TopicId, date) {
  const NewId = getNextId(model.app.tempWeeks)
  model.app.tempWeeks.push({ id: NewId, emneId: TopicId, name: 'Week ' + NewId })
  createNewWeekAssignments(NewId, date)
  updateView()
}

function createNewWeekAssignments(weekId, date) {
  const weekDay = ['Ukas mål', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag']
  for (let i = 0; i < 6; i++) {
    date = getNewIsoDate(date, 1)
    model.app.tempAssignment.push({ id: getNextId(model.app.tempAssignment), weeksId: weekId, text: '', name: weekDay[i], date: date })
  }
}

function editAssignments(id, text, date) {
  for (let assignment of model.app.tempAssignment) {
    if (assignment.id == id) {
      assignment.text = text
      if (checkDate(date)) {
        assignment.date = date
      }
    }
  }
}

function deleteTerm(id){
  let index = 0;
  for(let term of model.app.tempTerm){
    if(term.id == id){
      model.app.tempTerm.splice(index, 1)
      deleteWeekFromTerm(id)
    }
    index++;
  }
  updateView()
}

function deleteWeekFromTerm(id){
  const weeks = findWeeks(id);
  let index = 0;
  for(let ids of weeks){
    index = 0;
    for(let week of model.app.tempWeeks){
      if(week.id === ids){
        model.app.tempWeeks.splice(index, 1)
        deleteWeekAssignments(ids)
        break;
      }
    index++
  }
}
}

function deleteTerm(id){
  let index = 0;
  model.app.selectedTermId = null;
  model.app.selectedWeekId = null;
  model.app.selectedAssignmentId = null;
  for(let term of model.app.tempTerm){
    if(term.id == id){
      model.app.tempTerm.splice(index, 1)
      deleteWeekFromTerm(id)
    }
    index++;
  }
  updateView()
}

function deleteWeekFromTerm(id){
  const weeks = findWeeks(id);
  let index = 0;
  for(let ids of weeks){
    index = 0;
    for(let week of model.app.tempWeeks){
      if(week.id === ids){
        model.app.tempWeeks.splice(index, 1)
        deleteWeekAssignments(ids)
        break;
      }
    index++
  }
}
}

function deleteWeek(id) {
  let index = 0;
  for (let week of model.app.tempWeeks) {
    if (week.id == id) {
      model.app.tempWeeks.pop(index)
      deleteWeekAssignments(id)
    }
    index++;
  }
  updateView()
}



function deleteWeekAssignments(id){
    const assignments = findAssignments(id);
    let index = 0;
    for(let id of assignments){
      index = 0;
      for(let assignment of model.app.tempAssignment){
        if(assignment.id === id){
          model.app.tempAssignment.splice(index, 1)
          break;
        }
      index++
    }
  }
}


function getNewIsoDate(date) {
  date = new Date(date)
  date = new Date(date.setDate(date.getDate() + 1) + 1000 * 60 * 60).setHours(9);
  date = new Date(date).toISOString().substr(0, 16)
  return date
}


function changeToIsoDate(date) {
  date = new Date(date).toISOString().substr(0, 16)
  return date
}


function changeSelectedTerm(id){
  model.app.selectedTermId = id
  updateView()
}


function changeSelectedWeek(id){
  model.app.selectedWeekId = id
  updateView()
}


function changeSelectedAssignment(id) {
  model.app.selectedAssignmentId = id
  model.inputs.notes.text = null;
  model.inputs.notes.rating = null;
  if(canEdit()){
  const assignment = getArrayObjectById(model.app.tempAssignment, model.app.selectedAssignmentId)
  model.inputs.assignments.text = assignment.text
  model.inputs.assignments.date = assignment.date
}
  updateView()
}


function isAdmin() {
  if (model.app.loggedInUserId != null) {
    let user = model.data.users.find((element) => element.id === model.app.loggedInUserId);
    return user.typeId === 1;
  } else { return false };
}


function getTermsAllowed() {
  let termsAllowed = [];
  let weeks = getWeeksAllowed();
  weeks.forEach((week) => {
    getAllowedAndPush(model.app.tempTerm, week.emneId, termsAllowed);
  });
  return termsAllowed;
}


function getWeeksAllowed() {
  let weeksAllowed = [];
  let days = getDaysAllowed();
  days.forEach((day) => {
    getAllowedAndPush(model.app.tempWeeks, day.weeksId, weeksAllowed);
  });
  return weeksAllowed;
}


function getDaysAllowed() {
  let assignments = model.app.tempAssignment;
  if (isAdmin()) {
    return assignments;
  } else {
    let today = new Date().toISOString();
    return assignments.filter((element) => element.date <= today);
  }
}


function getAllowedAndPush(array, compareId, elementsAllowed) {
  const elementFound = array.find((element) =>
    element.id === compareId &&
    !elementsAllowed.some((element) => element.id === compareId)
  );
  if (elementFound !== undefined) {
    elementsAllowed.push(elementFound);
  }
}


function findWeeks(id) {
  let weeks = []
    model.data.weeks.find(element => {
      if (element.emneId === id) {
        weeks.push(element.id) 
      } 
    })
    return weeks
}


function findAssignments(id) {
  let assignments = []
    model.data.assignments.find(element => {
      if (element.weeksId === id) {
        assignments.push(element.id) 
      } 
    })
    return assignments
}


function getNewestDate() {
  let highestDate = {}
  for(let date of model.data.assignments){
    if(highestDate > date.date){
      highestDate = date
    }
  }
  return highestDate
}


function saveEditAssignment() {
  id = getArrayObjectById(model.app.tempAssignment, model.app.selectedAssignmentId).id
  model.app.tempAssignment.find(element => {
    if (element.id === id) {
        element.text = model.inputs.assignments.text;
        element.date = changeToIsoDate(model.inputs.assignments.date);
    }
});
updateView()
}


function canEdit(){
  if(isAdmin() && model.app.editView){
    return true;
  }
}


function copyTermsWeeksAssignments() {
  model.app.tempTerm = model.data.terms.map(term => ({ ...term }));
  model.app.tempWeeks = model.data.weeks.map(week => ({ ...week }));
  model.app.tempAssignment = model.data.assignments.map(assignment => ({ ...assignment }));
}

function saveAllAssignmentChanges() {
  model.data.terms = model.app.tempTerm.map(tempTerm => ({ ...tempTerm }));
  model.data.weeks = model.app.tempWeeks.map(tempWeeks => ({ ...tempWeeks }));
  model.data.assignments = model.app.tempAssignment.map(tempAssignment => ({ ...tempAssignment }));
  model.app.editView = false;
  model.inputs.assignments.date = null;
  model.inputs.topic.text = null;
  updateView();
}

function cancelAssignmentChanges() {
  model.app.tempTerm = [];
  model.app.tempWeeks = [];
  model.app.tempAssignment = [];
  model.app.editView = false;
  updateView();
}

function saveAssignmentChanges(assignmentId) {
  let assignment = getArrayObjectById(model.app.tempAssignment, assignmentId);
  if (assignment) {
    assignment.name = model.inputs.assignments.date || '';
    assignment.text = model.inputs.assignments.text || '';
      model.inputs.assignments.assignmentId = 0;
      model.inputs.assignments.date = null;
      model.inputs.assignments.text = null;
  }
  updateView();
}



function getAverageRating() {
  const assignment = model.app.selectedAssignmentId
  let rating = [];
  model.data.userNotes.map(element => {
    if (element.assignmentId === assignment) {
      rating.push(parseFloat(element.rating))
}
})

  const averageRating = rating.reduce((sum, rating) => sum + rating, 0) / rating.length
  return averageRating
}
