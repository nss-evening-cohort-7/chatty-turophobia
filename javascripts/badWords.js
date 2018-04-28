const data = require('./data.js');

const checkBadWords = (checkedMessage) => {
  const badWords = data.getBadWords();
  badWords.forEach((badWord) => {
    if (checkedMessage.includes(badWord)) {
      const re = `\\b${badWord}\\b`;
      const theRegExp = new RegExp(re, 'gi');
      checkedMessage = checkedMessage.replace(theRegExp, `<span data-obscenity='bad-word'>${badWord}</span>`);
      return checkedMessage;
    }
  });
  return checkedMessage;
};

module.exports = {
  checkBadWords,
};
