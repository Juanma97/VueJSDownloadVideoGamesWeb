import firebase from 'firebase';
import store from '@/store';

const config = {
  apiKey: 'AIzaSyBQlvSBUv8jeuGvGeAv7uktWjcb54RTxnI',
  authDomain: 'vueproject-40165.firebaseapp.com',
  databaseURL: 'https://vueproject-40165.firebaseio.com',
  projectId: 'vueproject-40165',
  storageBucket: 'vueproject-40165.appspot.com',
  messagingSenderId: '632638425753',
};

const database = firebase.initializeApp(config);

export default database;

database.signUp = async (email, password, name) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const UID = firebase.auth().currentUser.uid;
    firebase.auth().currentUser.displayName = name;
    let ref = firebase.database().ref('Users').child(UID).set({
      name: name,
      logins: 0,
      downloadProfiles: 0,
      profilesDownload: 'none',
      UID: UID,
    });
    store.commit('setCurrentUser', firebase.auth().currentUser);
    return true;
  } catch (error) {
    return error;
  }
};

database.signIn = async (email, password) => {
  try {
    let login;
    await firebase.auth().signInWithEmailAndPassword(email, password);
    const ref = firebase.database().ref('Users');
    ref.on('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot){
        if (childSnapshot.val().UID == firebase.auth().currentUser.uid) {
          login = childSnapshot.val().logins + 1;
          store.commit('setCurrentName', childSnapshot.val().name);
          store.commit('setCurrentLogins', childSnapshot.val().logins);
          store.commit('setCurrentDownloadProfiles', childSnapshot.val().downloadProfiles);
          store.commit('setCurrentProfiles', childSnapshot.val().profilesDownload);
          console.log("p", childSnapshot.val().profilesDownload)
        }
      });
    })
    let refe = firebase.database().ref('Users').child(firebase.auth().currentUser.uid).update({
      logins: login,
    });
    store.commit('setCurrentUser', firebase.auth().currentUser);
    return true;
  } catch (error) {
    return error;
  }
};

database.signOut = async () => {
  try {
    await firebase.auth().signOut();
    store.commit('setCurrentUser', null);
    return true;
  } catch (error) {
    return error;
  }
};
