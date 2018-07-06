const getFirebaseKey = () => {
  return new Promise ((resolve, reject) => {
    $.ajax(``).done((data) => {
      resolve(data);
    }).fail((err) => {
      reject(err);
    });
  });
};

const initializeFirebase = () => {
  getFirebaseKey().then((data) => {
    firebase.initializeApp(data.firebase);
  }).catch((err) => {
    console.error('Failed to get FB Keys: ', err);
  });
};

module.exports = {
  initializeFirebase,
};
