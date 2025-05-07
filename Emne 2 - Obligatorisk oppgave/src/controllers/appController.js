function setActiveTab(tabName) {
    model.app.activeTab = tabName;
    clearTagFilter()
    updateView();
}
