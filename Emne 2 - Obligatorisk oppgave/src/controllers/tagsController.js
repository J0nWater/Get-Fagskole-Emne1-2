function showFilteredRecipes(tag) {
    if(model.app.selectedTag === tag) {
        clearTagFilter()
        updateView();
    }
    else {
        model.app.searchInput = '';
        model.app.tagActive = true;
        model.app.selectedTag = tag;
        model.app.tempRecipes = model.recipes.filter(recipe => recipe.tags.includes(tag));
        updateView();
    }
}

function getAllTags() {
    const tags = model.recipes
        .flatMap(recipe => recipe.tags)
        .filter((tag, index, tags) => tags.indexOf(tag) === index);
    return tags;
}

function clearTagFilter() {
    model.app.tagActive = false;
    model.app.selectedTag = null;
    model.app.tempRecipes = [];
    model.app.searchInput = '';
}