function showTopicsLeftBarView() {
if(model.app.editView) {
        return showTopicsHtml(model.app.tempTopics, model.app.tempSubTopics);
    }
    else {
        copyTopicsSubtopics();
        return showTopicsHtml(model.data.topics, model.data.subTopics);
    }
}

function showTopicsMainContentView() {
   let selectedTopicId = model.app.selectedTopicId;
   let selectedSubTopicId = model.app.selectedSubTopicId;
   if (selectedSubTopicId) {
       return showSubTopicTextHtml(selectedSubTopicId);
   } else if (selectedTopicId) {
       return showTopicTextHtml(selectedTopicId);
   } else {
       return '';
   }
}

function showTopicsHtml(topics, subTopics) {
   let html = '';
   let editView = model.app.editView;
   topics.map((topic, index) => {
        let topicButtonClass = changeTopicButtonClass(topic.id)
        html +=/*HTML*/`
        <div class="leftBarDel">
            <button class="${topicButtonClass}" onclick="selectTopic(${topic.id})" >${topic.name}</button>
            ${editView ? /*Html*/`<button onclick="deleteTopic(${index}, ${topic.id})">❌</button>` : ''}
        </div>
        `;
        if(model.app.selectedTopicId === topic.id) {
            html += showSubTopicsHtml(subTopics, topic.id);
        }
        else if(editView) html += showSubTopicsHtml(subTopics, topic.id);
   });
   html += editView ? /*HTML*/`<button class="leftBarTheme" onclick="createTopic()">➕Hovedtema</button><br>` : '';
   html += showEditSaveButtons()
   return html;
}

function showSubTopicsHtml(subTopics, topicId) {
   let html = '';
   let editView = model.app.editView;
   subTopics.map((subTopic, index) => {
       let subTopicButtonClass = changeSubTopicButtonClass(subTopic.id)
       if(subTopic.topicId === topicId) {
           html += /*HTML*/`
           <div class="leftBarDel">
               <button class="${subTopicButtonClass}" onclick="selectSubTopic(${subTopic.id})">${subTopic.name}</button>
               ${editView ? /*HTML*/`<button onclick="deleteSubTopic(${index})">❌</button>` : ''}
            </div>
           `;
       }
   });
   html += editView ? /*HTML*/`<br><button class="leftBarTheme" onclick="createSubTopic(${topicId})">➕Undertema</button><br>` : '';
   return html;
}

function showTopicTextHtml(topicId) {
    if (!topicId) return '';
    let topicsArray = model.app.editView ? model.app.tempTopics : model.data.topics;
    let topic = getArrayObjectById(topicsArray, topicId);
    let html = '';
    if (model.app.editView) {
        model.inputs.topic.topicId = topicId;
        model.inputs.topic.name = model.inputs.topic.name ?? topic.name ?? '';
        model.inputs.topic.text = model.inputs.topic.text ?? topic.text ?? '';

        html = /*HTML*/
            `<div class="assignmentTextContainer">
                <input 
                    ${model.inputs.topic.name ? `value="${model.inputs.topic.name}"` : 'placeholder="Skriv inn navn på hovedtema"'} 
                    onchange="model.inputs.topic.name = this.value" size="40"><br><br>
                <textarea 
                    ${model.inputs.topic.text ? '' : 'placeholder="skriv inn tekst"'} rows="10" cols="70" 
                    onchange="model.inputs.topic.text = this.value">${model.inputs.topic.text || ''}</textarea><br>
                <button onclick="saveTopicChanges(${topic.id})">Lagre</button>
            </div>
        `;
    } else {
        html = /*HTML*/`
            <div class="assignmentTextContainer">
                <h1 class="mainTopic">${topic.name}</h1> 
                <div class="subTopicMain">${topic.text}</div> 
            </div>
        `;
    }
    return html;
}

function showSubTopicTextHtml(subTopicId) {
    if (!subTopicId) return '';
    let subTopicsArray = model.app.editView ? model.app.tempSubTopics : model.data.subTopics;
    let subTopic = getArrayObjectById(subTopicsArray, subTopicId);
    let html = '';
    if (model.app.editView) {
        model.inputs.subTopic.subTopicId = subTopicId;
        model.inputs.subTopic.name = model.inputs.subTopic.name ?? subTopic.name ?? '';
        model.inputs.subTopic.text = model.inputs.subTopic.text ?? subTopic.text ?? '';
        html = /*HTML*/`
            <div class="assignmentTextContainer">
                <input 
                    ${model.inputs.subTopic.name ? `value="${model.inputs.subTopic.name}"` : 'placeholder="Skriv inn under undertemaets navn"'} 
                    onchange="model.inputs.subTopic.name = this.value" size="40"><br><br>
                <textarea 
                    ${model.inputs.subTopic.text ? '' : 'placeholder="skriv inn tekst"'} rows="10" cols="70" 
                    onchange="model.inputs.subTopic.text = this.value">${model.inputs.subTopic.text || ''}</textarea><br>
                <button onclick="saveSubTopicChanges(${subTopic.id})">Lagre</button>
            </div>
        `;
    } else {
        html = /*HTML*/`
            <div class="assignmentTextContainer">
                <h1>${subTopic.name}</h1> 
                <div>${subTopic.text}</div>  
            </div>
        `;
    }
    return html;
}

function showEditSaveButtons() {
    if (!model.app.editView && isAdmin()) {
        return /*HTML*/`<button class="leftBarEdit" onclick="editViewActive()">Rediger</button></div>`
    } else if (model.app.editView && isAdmin()){
        return /*HTML*/`
        <button class="leftBarEdit" onclick="saveAllChanges()">Lagre</button>
        <button class="leftBarCancel" onclick="cancelChanges()">Avbryt</button>
    `;
    } else {
        return ""
    }
}