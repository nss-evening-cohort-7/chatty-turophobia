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
const findMessage = (id) => {
  return messagesArray.find(msg => msg.id === id);
};

module.exports = {
  setUsers,
  getUsers,
  setMessages,
  getMessages,
  findMessage,
};
