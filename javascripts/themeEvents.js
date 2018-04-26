const darkCheckBox = document.getElementById('dark-theme');

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
};
