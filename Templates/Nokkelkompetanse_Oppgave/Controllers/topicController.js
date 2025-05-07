function copyTopicsSubtopics() {
  model.app.tempTopics = model.data.topics.map(topic => ({ ...topic }));
  model.app.tempSubTopics = model.data.subTopics.map(subTopic => ({ ...subTopic }));
}

function selectTopic(topicId) {
  model.app.selectedTopicId = topicId;
  model.app.selectedSubTopicId = null;
  model.inputs.topic.topicId = topicId;
  model.inputs.topic.name = null;
  model.inputs.topic.text = null;
  model.inputs.subTopic.subTopicId = 0;
  model.inputs.subTopic.name = null;
  model.inputs.subTopic.text = null;
  updateView();
}

function selectSubTopic(subTopicId) {
  model.app.selectedSubTopicId = subTopicId;
  let subTopic = getArrayObjectById(model.data.subTopics, subTopicId);
  model.app.selectedTopicId = subTopic ? subTopic.topicId : null;
  model.inputs.subTopic.subTopicId = subTopicId;
  model.inputs.subTopic.name = null;
  model.inputs.subTopic.text = null;
  model.inputs.topic.topicId = model.app.selectedTopicId;
  model.inputs.topic.name = null;
  model.inputs.topic.text = null;
  updateView();
}

function createTopic() {
  let newId = getNextId(model.app.tempTopics);
  model.app.tempTopics.push({ id: newId, name: '', text: ''})
  model.app.selectedTopicId = newId;
  model.inputs.topic.name = null;
  model.inputs.topic.text = null;
  updateView();
}
function createSubTopic(topicId) {
  let newId = getNextId(model.app.tempSubTopics);
  model.app.tempSubTopics.push({ id: newId, topicId: topicId, name: '', text: ''})
  model.app.selectedSubTopicId = newId;
  model.inputs.subTopic.name = null;
  model.inputs.subTopic.text = null;
  updateView();
}

function deleteTopic(topicIndex, topicIdent) {
  let tempSubTopics = model.app.tempSubTopics;
  let tempSubTopicsIds = tempSubTopics.map(tempSubTopic => tempSubTopic.id)
  tempSubTopicsIds.forEach(tempSubtopicId => {
    let subTopicIndex = tempSubTopics.findIndex(tempSubTopic => tempSubTopic.id === tempSubtopicId);
    if(subTopicIndex !== -1 && topicIdent === tempSubTopics[subTopicIndex].topicId) {
      model.app.tempSubTopics.splice(subTopicIndex, 1);
    };
  });
  model.app.tempTopics.splice(topicIndex, 1)
  model.app.selectedTopicId = null;
  model.app.selectedSubTopicId = null;
  updateView();
}

function deleteSubTopic(subTopicIndex) {
  model.app.tempSubTopics.splice(subTopicIndex, 1);
  model.app.selectedTopicId = null;
  model.app.selectedSubTopicId = null;
  updateView();
}

function saveAllChanges() {
  model.data.topics = model.app.tempTopics.map(tempTopic => ({ ...tempTopic }));
  model.data.subTopics = model.app.tempSubTopics.map(tempSubTopic => ({ ...tempSubTopic }));
  model.app.editView = false;
  model.inputs.topic.name = null;
  model.inputs.topic.text = null;
  model.inputs.subTopic.name = null;
  model.inputs.subTopic.text = null;
  updateView();
}

function cancelChanges() {
  model.app.tempTopics = [];
  model.app.tempSubTopics = [];
  model.app.editView = false;
  model.app.selectedTopicId = null;
  model.app.selectedSubTopicId = null;
  updateView();
}

function saveTopicChanges(topicId) {
  let topic = getArrayObjectById(model.app.tempTopics, topicId);
  if (topic) {
      topic.name = model.inputs.topic.name || '';
      topic.text = model.inputs.topic.text || '';
      model.inputs.topic.topicId = 0;
      model.inputs.topic.name = null;
      model.inputs.topic.text = null;
  }
  updateView();
}

function saveSubTopicChanges(subTopicId) {
  let subTopic = getArrayObjectById(model.app.tempSubTopics, subTopicId);
  if (subTopic) {
      subTopic.name = model.inputs.subTopic.name || '';
      subTopic.text = model.inputs.subTopic.text || '';
      model.inputs.subTopic.subTopicId = 0;
      model.inputs.subTopic.name = null;
      model.inputs.subTopic.text = null;
  }
  updateView();
}

function changeTopicButtonClass(topicId) {
  if(model.app.selectedTopicId === topicId) {
    return 'selectedTopicButton';
  }
  else {return 'leftBarTopic';}
}

function changeSubTopicButtonClass(subTopicId) {
  if(model.app.selectedSubTopicId === subTopicId) {
    return 'selectedSubTopicButton';
  }
  else {return 'leftBarSub';}
}
