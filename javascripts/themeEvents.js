const customThemeBtn = document.getElementById('custom-theme');
const saveChangesBtn = document.getElementById('save-changes');
const darkCheckBox = document.getElementById('dark-theme');
const body = document.getElementsByTagName('body')[0];
const $backgroundColor = $('#background-color');
const $textColor = $('#text-color');

const customThemePicker = (e) => {
  const currentTheme = getComputedStyle(body, null);
  $backgroundColor.spectrum({
    color: currentTheme.backgroundColor,
  });
  $textColor.spectrum({
    color: currentTheme.color,
  });
  saveChangesBtn.addEventListener('click', setTheme);
};
const setTheme = (e) => {
  const newBackgroundColor = $backgroundColor.spectrum('get').toHexString();
  const newTextColor = $textColor.spectrum('get').toHexString();
  body.style.backgroundColor = newBackgroundColor;
  body.style.color = newTextColor;
};
const addThemePickerEvent = () => {
  customThemeBtn.addEventListener('click', customThemePicker);
};

const addDarkThemeEvent = () => {
  darkCheckBox.addEventListener('click', darkTheme);
};

const darkTheme = (e) => {
  const backgroundChange = document.getElementById('body-background');
  const daNavBar = document.getElementById('da-navbar');
  const labels = document.getElementsByTagName('label');
  const wells = document.getElementsByClassName('well');

  const isChecked = e.target.children[0].checked;
  if (isChecked === false) {
    console.log('body: ', backgroundChange);
    backgroundChange.classList.remove('cheesy');
    backgroundChange.classList.add('stormy');
    daNavBar.classList.add('dark');
    for (let i = 0; i < labels.length; i++) {
      labels[i].classList.add('dark');
    }
    for (let j = 0; j < wells.length; j++) {
      wells[j].classList.add('dark');
    }
  } else if (isChecked) {
    backgroundChange.classList.remove('stormy');
    backgroundChange.classList.add('cheesy');
    daNavBar.classList.remove('dark');
    for (let i = 0; i < labels.length; i++) {
      labels[i].classList.remove('dark');
    }
    for (let j = 0; j < wells.length; j++) {
      wells[j].classList.remove('dark');
    }
  }
};

function changeCSS (cssFile) {
  const changeLink = document.getElementsByTagName('link').item(0);
  changeLink.removeAttribute('integrity');
  changeLink.setAttribute('href', cssFile);
}

changeCSS('../styles/bootstrap.min.css');

module.exports = {
  addDarkThemeEvent,
  addThemePickerEvent,
};
