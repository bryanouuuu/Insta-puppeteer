const firebase = require('firebase-admin');
const config = require('./config/db_config.json');

firebase.initializeApp({
    credential: firebase.credential.cert(config),
    databaseURL: "https://githubscraper-e969epp.firebaseio.com"
  });

  let database = firebase.database();

  const writeUserData = async (users) =>{
      const created_at = await new Date().getTime();
      await database.ref('users/'+users['name']).set({


      });
  }

  module.exports = {
      writeUserData,
  };