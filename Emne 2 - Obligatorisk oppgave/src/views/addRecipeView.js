function addRecipeView() {
    return /*HTML*/`
    <div class="content">
        <form id="recipe-form" onsubmit="addRecipe(); return false">
            <div class="form-group">
                <label for="title">Tittel</label>
                <input type="text" id="title" required>
            </div>
            
            <div class="form-group">
                <label for="tags">Tags (kommaseparert)</label>
                <input type="text" id="tags" placeholder="f.eks Frokost, Vegansk, Rask" required>
            </div>
            
            <div class="form-group">
                <label for="ingredients">Ingredienser</label>
                <textarea id="ingredients" placeholder="Skriv hver ingrediens på sin egen linje" required></textarea>
            </div>
            
            <div class="form-group">
                <label for="instructions">Instruksjoner</label>
                <textarea id="instructions" placeholder="Beskriv steg for steg" required></textarea>
            </div>
            
            <button type="submit">Legg til oppskrift</button>
        </form>
    </div>  
    `;
}