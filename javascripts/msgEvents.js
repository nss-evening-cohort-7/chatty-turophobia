const convertEmojis = require('./emoji.js');
const data = require('./data');
const grabInput = document.getElementById('input');
const timeStamp = () => {
  return new Date().toLocaleString();
};
const addSubmitEvent = () => {
  grabInput.addEventListener('keypress', submitMessage);
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

module.exports = {
  addSubmitEvent,
  timeStamp,
};
