const convertEmojis = require('./emoji');
const data = require('./data');
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
  const userName = document.getElementById('selected-user')
    .previousElementSibling.querySelector('.selected')
    .querySelector('.text').innerHTML;
  const user = data.findUserByName(userName).id;
  if (e.keyCode === 13 && message && user) {
    message = convertEmojis(message);
    const newMsg = new Message (user, message);
    data.addMessage(newMsg);
  }
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
  console.log(data.getMessages());
  for (let i = 0; i < messages.length; i++) {
    messages[i].innerHTML = '';
  };
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
};

module.exports = {
  addSubmitEvent,
  timeStamp,
  addDeleteEvent,
  addClearMessageEvent,
};
