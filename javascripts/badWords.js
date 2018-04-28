const data = require('./data.js');

const checkBadWords = (checkedMessage) => {
  const badWords = data.getBadWords();
  badWords.forEach((badWord) => {
    if (checkedMessage.includes(badWord))
      checkedMessage.replace(new RegExp(badWord, `<span class='bad-word'>${badWord}</span>`));
    return checkedMessage;
  });
  return checkedMessage;
};

module.exports = {
  checkBadWords,
};
