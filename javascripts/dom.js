const findUser = require('./data.js').findUser;
const checkEmojis = require('./emoji.js');
const badWords = require('./badWords.js');

const printToDom = (domString, divId) => {
  document.getElementById(divId).innerHTML = domString;
};

const printUsers = usersArray => {
  let domString = '';
  domString +=       `<select id="selected-user" class="selectpicker form-control navbar-btn" title="Choose user...">`;
  usersArray.forEach ((user) => {
    domString +=         `<option>${user.userName}</option>`;
  });
  domString +=       `</select>`;
  $(document).ready(function () {
    printToDom(domString, 'users-output');
    $('.selectpicker').selectpicker();
  });
};
const printMessages = (messages) => {
  while (messages.length > 20) {
    messages.pop();
  }
  let domString = '';
  for (let i = 0; i < messages.length; i++) {
    const currentUser = findUser(messages[i].userId);
    let checkedMessage = checkEmojis(messages[i].message);
    checkedMessage = badWords.checkBadWords(checkedMessage);
    domString += `<div id='${messages[i].id}' class='well well-sm clearfix see-through'>`;
    domString +=  `<h5>${currentUser.userName}</h5>`;
    domString +=  `<div class="pull-left">`;
    domString +=    `<p>${checkedMessage}  <small class='bg-info'>${messages[i].timestamp}</small></p>`;
    domString +=  `</div>`;
    domString +=  `<div class="pull-right">`;
    domString +=    `<button class="btn btn-default edit-button" type="submit">Edit</button>`;
    domString +=    `<button class="btn btn-default delete-btn" type="submit">Delete</button>`;
    domString +=  `</div>`;
    domString += `</div>`;
  }
  printToDom(domString, 'messages-output');
};

module.exports = {
  printUsers,
  printMessages,
};
