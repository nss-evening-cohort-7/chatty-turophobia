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

module.exports = {
  setUsers,
  getUsers,
  setMessages,
  getMessages,
  findMessage,
  addMessage,
  findUser,
  findUserByName,
};
