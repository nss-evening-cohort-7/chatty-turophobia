const convertEmojis = require('./emoji.js');
const data = require('./data.js');
const grabInput = document.getElementById('input');
const clearMessagesBtn = document.getElementById('clearMessagesBtn');
const messages = document.getElementsByClassName('clear');
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
  if (e.keyCode === 13 && message) {
    message = convertEmojis(message);
    console.log(message);
  }
};
const clearMessages = (e) => {
  data.setMessages([]);
  console.log(data.getMessages());
  for (let i = 0; i < messages.length; i++) {
    messages[i].innerHTML = '';
  };
};

module.exports = {
  addSubmitEvent,
  timeStamp,
  addClearMessageEvent,
};
