function recipeView() {
    let recipeHtml = '';
    let recipes = model.app.tagActive ? model.app.tempRecipes : model.recipes;
    for(const recipe of recipes) {
        recipeHtml += recipeComponent(recipe);
    }

    return /*HTML*/`       
         <div id="recipe-list">
            ${recipeHtml}
        </div>
    `;
}
