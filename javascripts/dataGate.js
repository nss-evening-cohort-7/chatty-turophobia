const xhrs = require('./xhr');

const successFunction1 = function () {
  console.log('successFunction1');
};

const WTF = function () {
  console.log('WTF funstion');
};

const initializer = () => {
  xhrs.xhr1(successFunction1, WTF);
};

module.exports = initializer;
