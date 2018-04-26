const customThemeBtn = document.getElementById('custom-theme');
const saveChangesBtn = document.getElementById('save-changes');
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
module.exports = {
  addThemePickerEvent,
};
