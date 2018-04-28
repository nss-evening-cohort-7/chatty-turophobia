const data = require('./data.js');

const checkBadWords = (checkedMessage) => {
  const badWords = data.getBadWords();
  badWords.forEach((badWord) => {
    if (checkedMessage.includes(badWord)) {
      console.log('BadWords is true:', badWord);
      const theRegExp = new RegExp(badWord, 'g');
      console.log('RegExp: ', theRegExp);
      checkedMessage.replace(theRegExp, `<span class='bad-word'>${badWord}</span>`);
      console.log('checkedMessage: ', checkedMessage);
      return checkedMessage;
    }
  });
  return checkedMessage;
};

module.exports = {
  checkBadWords,
};
