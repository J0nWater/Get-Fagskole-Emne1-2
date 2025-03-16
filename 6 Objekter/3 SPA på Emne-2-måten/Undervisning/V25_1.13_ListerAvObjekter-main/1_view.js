function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/`
        ${createAddColorHtml()}
        <div class="colors">
            ${createColorsHtml()}
        </div>
    `;
}

function createAddColorHtml(){
    if(!model.isAdding) return '<button onclick="startAdd()">+</button>';
    return /*HTML*/`
         <div>
            Forgrunnsfarge
            <input 
                type="color"
                onchange="model.newColorTheme.foregroundColor = this.value"
                value="${model.newColorTheme.foregroundColor  ?? ''}"
                >
        </div>
        <div>
            Bakgrunnsfarge
            <input 
                type="color"
                value="${model.newColorTheme.backgroundColor  ?? ''}"
                onchange="model.newColorTheme.backgroundColor = this.value"
            >
        </div>
        <div>
            Uthevingsfarge
            <input 
                type="color"
                value="${model.newColorTheme.highlightColor  ?? ''}"
                onchange="model.newColorTheme.highlightColor = this.value"
            >
        </div>
        <div>
            Laget av
            <input          
                value="${model.newColorTheme.creator  ?? ''}"   
                onchange="model.newColorTheme.creator = this.value"
            >
        </div>
        <div>
            Rating
            <input
                type="range"
                min="1"
                max="5"
                step="0.25"
                value="${model.newColorTheme.rating ?? ''}"
                onchange="model.newColorTheme.rating = this.value; updateView()"
            >
            ${model.newColorTheme.rating}
        </div>
        <button onclick="addColor()">Legg til ny farge</button>
        <button onclick="cancelAddColor()">Avbryt</button>              
    `;
}

function createColorsHtml() {
    let colorsHtml = `<input onchange="model.inputs.search = this.value"><button onclick="performSearch()">Search</button> ${model.filteredColorThemes.length > 0 ? '<span onclick="clearSearch()">(x) clear filter</span>' : ''}`;

    const themes = model.filteredColorThemes.length > 0 
        ? model.filteredColorThemes 
        : model.colorThemes;   
       
    let index = 0;
    for(const colorTheme of themes) {        
        colorsHtml += /*HTML*/`                    
            <div class="color">
                <div class="topBox">
                    <div>Theme ${index + 1}</div>                    
                    <button onclick="deleteColor(${index})">x</button>
                </div>
                <div style="
                    background-color: ${colorTheme.backgroundColor}; 
                    color: ${colorTheme.foregroundColor}
                    " class="box">
                    Rating: ${colorTheme.rating}<br>
                    Laget av: ${colorTheme.creator}<br>
                    <span style="color: ${colorTheme.highlightColor}">Uthevingsfarge</span>
                </div>
            </div>                                
        `;
        index++;
    }
 
    return colorsHtml;
}