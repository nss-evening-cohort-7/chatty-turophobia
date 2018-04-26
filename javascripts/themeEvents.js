
const largeTextCheckbox = document.getElementById('large-text-checkbox');
const body = document.getElementById('size');
// const el = document.querySelector('div');

const addLargeTextEvent = () => {
  largeTextCheckbox.addEventListener('click', increaseFontSize);
};

const increaseFontSize = (e) => {
  if (!e.target.classList.contains('active')) {
    body.className = 'fontSize';
    // console.log(allText);
    // document.body.style.fontSize = '230%';
    console.log('event');
  }

};

module.exports = addLargeTextEvent;
