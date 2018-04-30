let usersArray = [];
let badWordsArray = [];
let messagesArray = [
  {
    'id': 'item1',
    'userId': 0,
    'message': 'Hi, I really like coding. I would like to take a course in coding. Any suggestions?',
    'timestamp': 'noon',
  },
  {
    'id': 'item2',
    'userId': 1,
    'message': 'You should checkout NSS',
    'timestamp': '1:03pm',
  },
  {
    'id': 'item3',
    'userId': 2,
    'message': 'I heard good things about that school too. My friend attended it.',
    'timestamp': '1:13pm',
  },
  {
    'id': 'item4',
    'userId': 3,
    'message': 'Definitely checkout NSS. Also, if you decide to attend it, do PREWORK',
    'timestamp': '1:33pm',
  },
  {
    'id': 'item5',
    'userId': 1,
    'message': 'Yes, the prework is the team tree house from end course. I took it and liked it.',
    'timestamp': '1:43pm',
  },
];

const setUsers = (userData) => {
  usersArray = userData;
};

const getUsers  = () => {
  return usersArray;
};

const setBadWords = (wordsArray) => {
  badWordsArray = wordsArray;
};

const getBadWords = () => {
  return badWordsArray;
};

const setMessages = (messageData) => {
  messagesArray = messageData;
};

const getMessages = () => {
  return messagesArray;
};

const addMessage = (message) => {
  messagesArray.unshift(message);
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
  setBadWords,
  getBadWords,
};
