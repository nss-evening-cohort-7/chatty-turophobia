const xhrs = require('./xhr.js');
const data = require('./data.js');
const prints = require('./dom.js');
// const printToDom = require('./dom.js');

function successFunction1 () {
  const userData = JSON.parse(this.responseText).users;
  data.setUsers(userData);
  xhrs.xhr2(successFunction2, WTF);
  prints.printUsers(userData);
};

function successFunction2 () {
  const messageData = JSON.parse(this.responseText).messages;
  data.setMessages(messageData);
  prints.printMessages(data.getUsers(), messageData);
  // printToDom();

};

function WTF () {
  console.log('SHIIITTT! WHYHYHYHYHY');
};

const initializer = () => {
  xhrs.xhr1(successFunction1, WTF);
};

module.exports = initializer;
