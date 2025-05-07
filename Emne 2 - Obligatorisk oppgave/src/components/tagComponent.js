function tagView() {
    let tags = getAllTags();
    let tagsHtml = createTagButtonsHtml(tags);
    return tagsHtml;
}

function createTagButtonsHtml(tags) {
    let tagsHtml = '';
    for(let tag of tags) {
        let isActive = model.app.tagActive && model.app.selectedTag === tag;
        tagsHtml += /*HTML*/`
            <span class="tag filters ${isActive ? 'active' : ''}" onclick="showFilteredRecipes('${tag}')">${tag}</span>
        `;
    }
    return tagsHtml;
}
