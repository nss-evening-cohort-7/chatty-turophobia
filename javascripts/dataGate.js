const xhrs = require('./xhr.js');
const data = require('./data.js');
const prints = require('./dom.js');
const msgEvents = require('./msgEvents.js');

function successFunction1 () {
  const userData = JSON.parse(this.responseText).users;
  data.setUsers(userData);
  xhrs.xhr2(successFunction2, WTF);
  prints.printUsers(userData);
  msgEvents.addSubmitEvent();
  msgEvents.addClearMessageEvent();
};

function successFunction2 () {
  const messageData = JSON.parse(this.responseText).messages;
  data.setMessages(messageData);
  prints.printMessages(messageData);
  msgEvents.addSubmitEvent();
  msgEvents.addEditEvent();
  // msgEvents.addClearMessageEvent();
};

function WTF () {
  console.log('SHIIITTT! WHYHYHYHYHY');
};

const initializer = () => {
  xhrs.xhr1(successFunction1, WTF);
};

module.exports = initializer;
