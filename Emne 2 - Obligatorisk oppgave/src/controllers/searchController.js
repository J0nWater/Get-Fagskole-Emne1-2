function searchRecipes(value) {
    model.app.selectedTag = null;
    model.app.tagActive = true;
    model.app.searchInput = value;
    model.app.tempRecipes = model.recipes
        .filter(recipe => recipe.title.toLocaleLowerCase()
        .includes(value.toLocaleLowerCase()));
        
    updateView();
    focusOnInputEnd();
}

function focusOnInputEnd() {
    const input = document.getElementById("search");
    const length = input.value.length;
        input.focus();
        input.setSelectionRange(length, length); 
}