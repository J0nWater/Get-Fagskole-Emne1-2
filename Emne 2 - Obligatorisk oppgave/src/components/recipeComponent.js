function recipeComponent(recipe) {   
    return /*HTML*/`
        <div class="recipe">
            <div class="recipe-header">
                <h3>${recipe.title}</h3>
            </div>
            <div class="tag-list">
                ${createTagsHtml(recipe.tags)}
            </div>
            <p><strong>Ingredients:</strong></p>
            <ul class="ingredients-list">
                ${createIngredientsHtml(recipe.ingredients)}
            </ul>
            <p><strong>Instructions:</strong></p>
            ${createInstructionsHtml(recipe.instructions)}
        </div>
    `;
}

function createInstructionsHtml(instructions) {
    let instructionsHtml = '';
    let counter = 1;
    for(const instruction of instructions) {
        instructionsHtml += `<p>${counter}. ${instruction}</p>`;
        counter++;
    }

    return instructionsHtml;
}

function createTagsHtml(tags) {
    let tagsHtml = '';
    for(const tag of tags) {
        tagsHtml += `<span class="tag">${tag}</span>`;
    }

    return tagsHtml;
}

function createIngredientsHtml(ingredients) {
    let ingredientsHtml = '';
    for(const ingredient of ingredients) {
        ingredientsHtml += `<li>${ingredient}</li>`;
    }

    return ingredientsHtml;
}