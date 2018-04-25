const addDeleteEvent = require('./msgEvents.js').addDeleteEvent;

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
const printMessages = (users, messages) => {
  let domString = '';
  for (let i = 0; i < users.length; i++) {
    domString += `<div id='${messages[i].id}' class='well well-sm clearfix'>`;
    // domString += `<div class="pull-left">`;
    domString += `<h5>${users[i].userName}</h5>`;
    domString += `<div class="pull-left">`;
    for (let j = 0; j < messages.length; j++) {
      if (users[i].id === messages[j].userId)
        domString += `<p>${messages[i].message}</p>`;
    }
    domString += `</div>`;

    domString += `<div class="pull-right">`;
    domString += `<button class="btn btn-default" type="submit">Edit</button>`;
    domString += `<button class="btn btn-default delete-btn" type="submit">Delete</button>`;
    domString += `</div>`;
    domString += `</div>`;
  }
  printToDom(domString, 'messages-output');
  addDeleteEvent();

};

module.exports = {
  printUsers,
  printMessages,
};
