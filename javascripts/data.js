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

module.exports = {
  setUsers,
  getUsers,
  setMessages,
  getMessages,
};
