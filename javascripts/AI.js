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

// Idea is to not use the variable in msgThemes. Just use the updated message array instead, my be able to use add events then.

const grumpy = (messageToCheck) => {
  if (messageToCheck.toLowerCase().includes('happy')) {
    mrsGrumpy();
  }
};

const mrsGrumpy = () => {
  window.setTimeout(grumpyGrump, 3000);
  const messageArray = data.getMessages();
  const userToScold = data.findUser(messageArray[0].userId);
  function grumpyGrump () {
    const mrsGrumpyMessage = `<p>Eww Gross! ${userToScold.userName} you're happy? Happiness is for the weak!</p>`;
    const newMessage = new Message (4, mrsGrumpyMessage);
    data.addMessage(newMessage);
    const newMessageArray = data.getMessages();
    print.printMessages(newMessageArray);
  }
};

module.exports = {
  grumpy,
};
