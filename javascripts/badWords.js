const data = require('./data.js');

// const regexEscape = (str) => {
//   return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
// };

const checkBadWords = (checkedMessage) => {
  const badWords = data.getBadWords();
  badWords.forEach((badWord) => {
    if (checkedMessage.includes(badWord)) {
      // const re = /badWord/gi;
      // const re = /^((?!class).)*$j/g;
      // let re = '/^(?!.*(class)).*aderall';
      const re = `\^\(\?\!\.\*\(class\)\)\.\*${badWord}`; // escaped string
      // let re = `\/\^\(\?\!\.\*\(class\)\)\.\*${badWord}`;
      // re = regexEscape(re);

      const theRegExp = new RegExp(re, 'gi');
      checkedMessage = checkedMessage.replace(theRegExp, `<span class='bad-word'>${badWord}</span>`);
      return checkedMessage;
    }
  });
  return checkedMessage;
};

module.exports = {
  checkBadWords,
};
