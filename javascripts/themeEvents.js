const customThemeBtn = document.getElementById('custom-theme');
const saveChangesBtn = document.getElementById('save-changes');
const darkCheckBox = document.getElementById('dark-theme');
const body = document.getElementsByTagName('body')[0];
const messagesOutput = document.getElementById('messages-output');
const $backgroundColor = $('#background-color');
const $textColor = $('#text-color');
const preBuiltTheme1 = document.getElementById('thumb1');
const preBuiltTheme2 = document.getElementById('thumb2');

const customThemePicker = (e) => {
  const currentTheme = getComputedStyle(body, null);
  $backgroundColor.spectrum({
    color: currentTheme.backgroundColor,
  });
  $textColor.spectrum({
    color: currentTheme.color,
  });
  saveChangesBtn.addEventListener('click', setTheme);
  addPreBuiltEvents();
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

const darkTheme = () => {
  window.setTimeout(runDarkTheme, 1);

  function runDarkTheme () {

    const backgroundChange = document.getElementById('body-background');
    const daNavBar = document.getElementById('da-navbar');
    const labels = document.getElementsByTagName('label');
    const wells = document.getElementsByClassName('well');

    const isChecked = document.getElementById('dark-theme').children[0].checked;
    console.log('ischecked: ', isChecked);
    if (isChecked === true) {
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
    } else if (isChecked === false) {
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
  }
};

const largeTextCheckbox = document.getElementById('large-text-checkbox');

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

const addPreBuiltEvents = () => {
  preBuiltTheme1.addEventListener('click', setTheme1);
  preBuiltTheme2.addEventListener('click', setTheme1);
};

const setTheme1 = (e) => {
  const backgroundChange = document.getElementById('body-background');
  const daNavBar = document.getElementById('da-navbar');
  const labels = document.getElementsByTagName('label');
  const wells = document.getElementsByClassName('well');
  const theTarget = e.target.id;

  if (theTarget === 'thumb1' || theTarget === 'thumb-img1') {
    backgroundChange.classList.remove('custom2', 'stormy', 'cheesy');
    backgroundChange.classList.add('custom1');
    daNavBar.classList.remove('dark', 'custom2-light');
    daNavBar.classList.add('custom1-dark');
    for (let i = 0; i < labels.length; i++) {
      labels[i].classList.add('custom1-dark');
      labels[i].classList.remove('dark', 'custom2-light');
    }
    for (let j = 0; j < wells.length; j++) {
      wells[j].classList.remove('dark', 'custom2-light');
      wells[j].classList.add('custom1-dark');
    }
  } else if (theTarget === 'thumb2' || theTarget === 'thumb-img2') {
    backgroundChange.classList.remove('custom1', 'stormy', 'cheesy');
    backgroundChange.classList.add('custom2');
    daNavBar.classList.remove('dark', 'custom1-dark');
    daNavBar.classList.add('custom2-light');
    for (let i = 0; i < labels.length; i++) {
      labels[i].classList.add('custom2-light');
      labels[i].classList.remove('dark', 'custom1-dark');
    }
    for (let j = 0; j < wells.length; j++) {
      wells[j].classList.remove('dark', 'custom1-dark');
      wells[j].classList.add('custom2-light');
    }
  }
};

module.exports = {
  addDarkThemeEvent,
  addThemePickerEvent,
  addLargeTextEvent,
};
