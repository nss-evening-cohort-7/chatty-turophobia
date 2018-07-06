const initializer = require('./dataGate');
const themeEvents = require('./themeEvents');
const firebaseStart = require('./firebase.js');

initializer();
themeEvents.addThemePickerEvent();
firebaseStart.initializeFirebase();
