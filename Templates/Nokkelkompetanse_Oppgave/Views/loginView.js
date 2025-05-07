function getLoginPopupFormHTML() {
    let html = /*HTML*/`
        <div id="loginButton">
            <button onclick="loginPopupForm.classList.add('active')" id="showLogin">Log-in</button>
        </div>
        <div id="loginPopupForm">
            <h2 class="h2Login">Log-in</h2>
            <div onclick="loginPopupForm.classList.remove('active')" class="closeLogin">&times;</div>
            <div class="loginForm">
                <label for="email">Email</label>
                <input type="text" id="loginFormEmail" placeholder="Enter email" onInput="model.inputs.login.email = this.value">
            </div>

            <div class="loginForm">
                <label for="password">Password</label>
                <input type="password" id="loginFormPassword" placeholder="Enter Password" onInput="model.inputs.login.password = this.value">
            </div>

            <div class="loginForm">
                <label for="rememberMe">Remember me</label>
                <input type="checkbox" id="rememberMe">
            </div>

            <div class="loginForm">
                <button onclick="login()">Sign in</button>
            </div>
        </div>
    `;
    return html;
}

function getLogin() {
    if (model.app.loggedInUserId === null) {
        return getLoginPopupFormHTML();
    } else {
        return /*HTML*/`
        <div id="loginButton">
            <button onclick="logOut()">Log-out</button>
        </div>
        `;
    }
}
