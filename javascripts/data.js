let usersArray = [];
let messagesArray = [];

const setUsers = (userData) => {
  usersArray = userData;
};

const getUsers  = () => {
  return usersArray;
};

const setMessages = (messageData) => {
  messagesArray = messageData;
};

const getMessages = () => {
  return messagesArray;
};
const addMessage = (message) => {
  messagesArray.push(message);
};
const findMessage = (id) => {
  return messagesArray.find(msg => msg.id === id);
};
const findUser = (id) => {
  return usersArray.find(user => user.id === id);
};
const findUserByName = (name) => {
  return usersArray.find(user => user.userName === name);
};

const deleteMessage = (message) => {
  const messageIndex = messagesArray.indexOf(message);
  messagesArray.splice(messageIndex, 1);
  console.log('messageArray: ',messagesArray);
};

module.exports = {
  setUsers,
  getUsers,
  setMessages,
  getMessages,
  findMessage,
  deleteMessage,
  addMessage,
  findUser,
  findUserByName,
};
