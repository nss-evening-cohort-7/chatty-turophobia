const findUser = require('./data.js').findUser;

const printToDom = (domString, divId) => {
  document.getElementById(divId).innerHTML = domString;
};

const printUsers = usersArray => {
  console.log(usersArray);
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
  let domString = '';
  for (let i = 0; i < messages.length; i++) {
    const currentUser = findUser(messages[i].userId);
    domString += `<div id='${messages[i].id}' class='well well-sm clearfix'>`;
    domString +=  `<h5>${currentUser.userName}</h5>`;
    domString +=  `<div class="pull-left">`;
    domString +=    `<p>${messages[i].message}</p>`;
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
