function addRecipe() {
    const title = document.getElementById('title').value
    const tags = document.getElementById('tags').value
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag !== '');
    const ingredients = document.getElementById('ingredients').value
        .split('\n')
        .map(ingredient => ingredient.trim())
        .filter(ingredient => ingredient !== '');
    const instructions = document.getElementById('instructions').value
        .split('.')
        .filter(instruction => instruction !== '')
        .map(instruction => instruction.trim() + '.');
    const id = model.recipes.length + 1;
    const newRecipe = {id, title, ingredients, instructions, tags}

    model.recipes.push(newRecipe);
    model.app.activeTab = 'recipes'
    
    updateView();
}