function addColor() {
    model.colorThemes.push(model.newColorTheme);    
    model.isAdding = false;    
    model.newColorTheme = {};

    updateView();
}

function deleteColor(index) {
    model.colorThemes.splice(index, 1);
    updateView();
}

function startAdd() {
    model.isAdding = true;
    updateView();
}

function cancelAddColor() {
    model.isAdding = false;
    updateView();
}

function performSearch() {
    model.filteredColorThemes = [];
    for(const colorTheme of model.colorThemes) {
        if(colorTheme.creator.includes(model.inputs.search)) {
            model.filteredColorThemes.push(colorTheme);
        }
    }
    updateView();
}

function clearSearch() {
    model.filteredColorThemes = [];
    updateView();
}