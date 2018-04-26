const darkCheckBox = document.getElementById('dark-theme');

const addDarkThemeEvent = () => {
  darkCheckBox.addEventListener('click', darkTheme);
};

const darkTheme = (e) => {
  const backgroundChange = document.getElementById('body-background');
  console.log('Event: ', e);
  console.log('DarkCheck: ', darkCheckBox);
  const isChecked = e.target.children[0].checked;
  console.log('isChecked: ', isChecked);
  if (isChecked === false) {
    console.log('body: ', backgroundChange);
    backgroundChange.classList.add('stormy');
  } else if (isChecked) {
    backgroundChange.classList.remove('stormy');
  }
};

module.exports = {
  addDarkThemeEvent,
};
