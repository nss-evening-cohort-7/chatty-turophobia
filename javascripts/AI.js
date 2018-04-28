const data = require('./data.js');
const print = require('./dom.js');

const Message = (() => {
  let firstId = 6;
  return function Message (id, message) {
    this.id = 'item' + firstId++;
    this.userId = id;
    this.message = message;
    this.timestamp = 'Sometime from somewhere, a voice!';
  };
})();

const grumpy = (messageToCheck) => {
  if (messageToCheck.toLowerCase().includes('happy')) {
    mrsGrumpy();
  }
};

const mrsGrumpy = () => {
  window.setTimeout(grumpyGrump, 3000);
  const messageArray = data.getMessages();
  const userToScold = messageArray[0].userId;
  function grumpyGrump () {
    const mrsGrumpyMessage = `<p>Eww Gross! ${userToScold} you're happy? Happiness is for the weak!</p>`;
    const mrsGrumpy = 'Mrs. Grumpy!';
    const newMessage = new Message (mrsGrumpy, mrsGrumpyMessage);
    data.addMessage(newMessage);
    print.printMessages(messageArray);
  }
};

module.exports = {
  grumpy,
};
