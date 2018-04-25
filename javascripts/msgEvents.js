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
  if (e.keyCode === 13 && message && messageToEdit.id) {
    const messages = data.getMessages();
    messages.forEach((item) => {
      if (item.id === messageToEdit.id) {
        item.message = message;
      }
    });
    console.log('Edited messages array: ', messages);
    data.setMessages(messages);
    console.log('New Source of Truth MessageArray: ', data.getMessages());
    messageToEdit = [];
    grabInput.value = '';
  } else if (e.keyCode === 13 && message && messageToEdit.id !== true) {
    console.log('This is the new Message: ', message);
    message = convertEmojis(message);
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
  console.log('Message to Edit: ', messageToEdit);
};

module.exports = {
  addSubmitEvent,
  addEditEvent,
  timeStamp,
};
