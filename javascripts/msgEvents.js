const convertEmojis = require('./emoji.js');
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

module.exports = {
  addSubmitEvent,
  timeStamp,
};
