const convertEmojis = require('./emoji.js');
const data = require('./data.js');
const grabInput = document.getElementById('input');
const editButton = document.getElementsByClassName('edit-button');

let messageToEdit = [];

const timeStamp = () => {
  return new Date().toLocaleString();
};
const addSubmitEvent = () => {
  grabInput.addEventListener('keypress', submitMessage);
};

const submitMessage = (e) => {
  let message = grabInput.value;
  if (e.keyCode === 13 && message) {
    message = convertEmojis(message);
    console.log(message);
  }
};

const addEditEvent = () => {
  for (let i = 0; i < editButton.length; i++) {
    editButton[i].addEventListener('click', editMessage);
  };
};

const editMessage = (e) => {
  const messageId = e.target.parentNode.previousSibling.children[0].id;
  messageToEdit = data.findMessage(messageId);
  grabInput.value = messageToEdit.message;
};

module.exports = {
  addSubmitEvent,
  addEditEvent,
  timeStamp,
};
