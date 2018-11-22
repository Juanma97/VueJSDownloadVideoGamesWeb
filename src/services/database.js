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
    await firebase.auth().signInWithEmailAndPassword(email, password);
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
