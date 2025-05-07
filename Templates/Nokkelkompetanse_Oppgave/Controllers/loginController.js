function login() {
    if (isRegisteredUser()) {
        setPage('daily');
    } else {
    }
}

function isRegisteredUser() {
    let result = false;
    model.data.users.find(element => {
        if (element.email === model.inputs.login.email 
            && element.password === model.inputs.login.password) {
            model.app.loggedInUserId = element.id;
            result = true;
        }
    });
    return result;
}

function logOut() {
    model.app.loggedInUserId = null;
    model.app.page = 'daily';
    updateView();
}