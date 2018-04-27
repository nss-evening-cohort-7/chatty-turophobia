const customThemeBtn = document.getElementById('custom-theme');
const saveChangesBtn = document.getElementById('save-changes');
const darkCheckBox = document.getElementById('dark-theme');
const body = document.getElementsByTagName('body')[0];
const messagesOutput = document.getElementById('messages-output');
const largeTextCheckbox = document.getElementById('large-text-checkbox');
const $backgroundColor = $('#background-color');
const $textColor = $('#text-color');
const backgroundChange = document.getElementById('body-background');

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

let newBackgroundColorTransparent60;
const setTheme = (e) => {
  const newBackgroundColor = $backgroundColor.spectrum('get').toHex();
  newBackgroundColorTransparent60 = `#${newBackgroundColor}99`;
  console.log(newBackgroundColorTransparent60);
  const backgroundValue = linearGradientAndImg();
  const newTextColor = $textColor.spectrum('get').toHexString();
  body.style.background = backgroundValue;
  body.style.backgroundSize = 'cover';
  body.style.color = newTextColor;
};

const linearGradientAndImg = () => {
  let linearGradientString;
  if (backgroundChange.classList.contains('cheesy')) {
    linearGradientString = changeImgAndNewBackgrColor('../img/cheesy.jpg');
    return linearGradientString;
  } else if (backgroundChange.classList.contains('stormy')) {
    linearGradientString = changeImgAndNewBackgrColor('../img/stormy.jpg');
    return linearGradientString;
  }
};

const addThemePickerEvent = () => {
  customThemeBtn.addEventListener('click', customThemePicker);
};

const changeImgAndNewBackgrColor = (img) => {
  body.style.background = `linear-gradient(${newBackgroundColorTransparent60}, ${newBackgroundColorTransparent60}), url(${img})`;
  body.style.backgroundSize = 'cover';
};

const addDarkThemeEvent = () => {
  darkCheckBox.addEventListener('click', darkTheme);
};

const darkTheme = (e) => {
  const daNavBar = document.getElementById('da-navbar');
  const labels = document.getElementsByTagName('label');
  const wells = document.getElementsByClassName('well');
  const isChecked = e.target.children[0].checked;
  if (isChecked === false) {
    if (backgroundChange.classList.contains('cheesy')) {
      changeImgAndNewBackgrColor('../img/stormy.jpg');
    }
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
    if (backgroundChange.classList.contains('stormy')) {
      changeImgAndNewBackgrColor('../img/cheesy.jpg');
    }
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

const addLargeTextEvent = () => {
  largeTextCheckbox.addEventListener('click', increaseFontSize);
};

const increaseFontSize = (e) => {
  if (!e.target.classList.contains('active')) {
    changeCSS('../styles/bootstrap.min.css');
    messagesOutput.style.marginTop = '150px';
  } else if (e.target.classList.contains('active')) {
    changeCSSBack ('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css', 'sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u');
    messagesOutput.style.marginTop = '110px';
  }
};

function changeCSS (cssFile) {
  const changeLink = document.getElementsByTagName('link').item(0);
  changeLink.removeAttribute('integrity');
  changeLink.setAttribute('href', cssFile);
}

function changeCSSBack (cdn, value) {
  const changeLink = document.getElementsByTagName('link').item(0);
  changeLink.setAttribute('href', cdn);
  changeLink.setAttribute('integrity', value);
}

module.exports = {
  addDarkThemeEvent,
  addThemePickerEvent,
  addLargeTextEvent,
};
