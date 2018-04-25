const convertEmojis = require('./emoji.js');
const data = require('./data.js');
const grabInput = document.getElementById('input');

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
};
