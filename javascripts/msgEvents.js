const convertEmojis = require('./emoji.js');
const editButton = document.getElementsByClassName('edit-button');
const data = require('./data');
const printMessages = require('./dom.js').printMessages;
const grabInput = document.getElementById('input');
const clearMessagesBtn = document.getElementById('clearMessagesBtn');
let messageToEdit = [];

const timeStamp = () => {
  return new Date().toLocaleString();
};
const addSubmitEvent = () => {
  grabInput.addEventListener('keypress', submitMessage);
};
const addClearMessageEvent = () => {
  clearMessagesBtn.addEventListener('click', clearMessages);
};

const submitMessage = (e) => {
  let message = grabInput.value;
  const messageArray = data.getMessages();
  if (e.keyCode === 13 && message && messageToEdit.id) {
    messageArray.forEach((item) => {
      if (item.id === messageToEdit.id) {
        item.message = message;
      }
    });
    data.setMessages(messageArray);
    messageToEdit = [];
    grabInput.value = '';
  } else if (e.keyCode === 13 && message && messageToEdit.id !== true) {
    const userName = document.getElementById('selected-user')
      .previousElementSibling.querySelector('.selected')
      .querySelector('.text').innerHTML;
    const user = data.findUserByName(userName).id;
    message = convertEmojis(message);
    const newMsg = new Message (user, message);
    data.addMessage(newMsg);
    grabInput.value = '';
  }
  printMessages(messageArray);
  addEditEvent();
  addDeleteEvent();
};

const Message = (() => {
  let firstId = 6;
  return function Message (id, message) {
    this.id = 'item' + firstId++;
    this.userId = id;
    this.message = message;
    this.timestamp = timeStamp();
  };
})();

const clearMessages = (e) => {
  data.setMessages([]);
  printMessages([]);
  // disableClearMessageBtn(e);
};

const addDeleteEvent = () => {
  const deleteButtons = document.getElementsByClassName('delete-btn');
  const deleteBtnArray = Array.from(deleteButtons);
  deleteBtnArray.forEach(btn => {
    btn.addEventListener('click', removeMessage);
  });
};

const removeMessage = (e) => {
  const messageId = e.target.parentNode.parentNode.id;
  const selectedMessage = data.findMessage(messageId);
  data.deleteMessage(selectedMessage);
  const newMessageArray = data.getMessages();
  printMessages(newMessageArray);
  addEditEvent();
  addDeleteEvent();
};

const addEditEvent = () => {
  for (let i = 0; i < editButton.length; i++) {
    editButton[i].addEventListener('click', editMessage);
  };
};

const editMessage = (e) => {
  const messageId = e.target.parentNode.parentNode.id;
  messageToEdit = data.findMessage(messageId);
  grabInput.value = messageToEdit.message;
  grabInput.focus();
};

module.exports = {
  addSubmitEvent,
  addEditEvent,
  timeStamp,
  addDeleteEvent,
  addClearMessageEvent,
  // disableClearMessageBtn,
};
