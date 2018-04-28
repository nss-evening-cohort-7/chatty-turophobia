const data = require('./data.js');

const checkBadWords = (checkedMessage) => {
  const badWords = data.getBadWords();
  badWords.forEach((badWord) => {
    if (checkedMessage.toLowerCase().includes(badWord)) {
      const re = `\\b${badWord}\\b`;
      const theRegExp = new RegExp(re, 'gi');
      // const userBadWord = findBadWord();
      checkedMessage = checkedMessage.replace(theRegExp, `<span class='bad-word'>${badWord}</span>`);
    }
  });
  return checkedMessage;
};

module.exports = {
  checkBadWords,
};
