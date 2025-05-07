function showMainView() {
    let currentMainContentView = '';
    let currentLeftbarView = '';

    switch (model.app.page) {
        case 'topics':
            currentMainContentView = showTopicsMainContentView();
            currentLeftbarView = showTopicsLeftBarView();
            break;
        case 'daily':
            currentMainContentView = getDailyHTML();
            currentLeftbarView = '';
            break;
        case 'weekly':
            currentMainContentView = getAssignmentTextHTML();
            currentLeftbarView = getWeeklyHTML();
            break;
        case 'assignment':
            currentMainContentView = getAssignmentTextHTML();
            currentLeftbarView = showAssignmentsLeftBarView();
            break;
        default:
            currentMainContentView = '';
            break;
    }

    document.getElementById('app').innerHTML = /*HTML*/`
        <main>
            <div class="header">${headerView()}</div>
            <div class="leftBar">${currentLeftbarView}</div>
            <div class="mainContent">${currentMainContentView}</div>
            <div class="rightBar">${generateUserNote()}</div>
        </main>
    `;
}

function headerView() {
    let headerHtml = '';
    headerHtml = /*HTML*/`
        <button onclick="setPage('daily')">Daily</button>
        <button onclick="setPage('weekly')">Weekly</button>
        <button onclick="setPage('assignment')">Assignments</button>
        <button onclick="setPage('topics')">Topics</button>
        ${getLogin()}
    `;
    return headerHtml
}

function generateUserNote() {
    if (loggedIn() && model.app.selectedAssignmentId !== null) {
        if (!checkUserNote()) {
            createNotes();
        }

    }
    return getUserNote();
}