//model
let usersData = [];  
let userNames = ["dag", "roger", "rolf", "espen", "per88"]

//view
function updateView() {
    document.getElementById("app").innerHTML += createUserDataHtml()
      
} 

function createUserDataHtml() {
    html = '';
    for (let userData of usersData) {  
        html +="<p>" + userData.name + " (" + userData.role + ") - " + userData.email + " [PW: " + userData.pass + "]</p>";  
    }
    return html
}

//controller
function generateUsersData() {
    for (let userName of userNames) {  
        userName = userNames[Math.floor(Math.random() * userNames.length)];  
        let userType = Math.random() > 0.5 ? "Admin" : "User";  
        let mail = userName.toLowerCase().replace("_", "") + "@totallygetacademy.no";  
        let password = Math.random().toString(36).substring(2, 8); 
        usersData.push({ name: userName, email: mail, role: userType, pass: password });  
    }
    updateView();
}
