const xhr1 = (successFunction, errorFunction) => {
  const myRequest = new XMLHttpRequest;
  myRequest.addEventListener('load', successFunction);
  myRequest.addEventListener('error', errorFunction);
  myRequest.open('GET', '../db/users.json');
  myRequest.send();
};

const xhr2 = () => {
  const myRequest = new XMLHttpRequest;
  myRequest.addEventListener('load', successFunction);
  myRequest.addEventListener('error', errorFunction);
  myRequest.open('GET', '../db/messages.json');
  myRequest.send();
};

module.exports = {
  xhr1,
  xhr2,
};
