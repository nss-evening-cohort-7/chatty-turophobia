const grabInput = document.getElementById('input');

const timeStamp = () => {
  return new Date().toLocaleString();
};

const addSubmitEvent = () => {
  grabInput.addEventListener('keypress', submitMessage);
};

const submitMessage = (e) => {
  if (e.keyCode === 13 && grabInput.value !== '') {
    console.log('YAY!');
  }
};

module.exports = {
  addSubmitEvent,
  timeStamp,
};
