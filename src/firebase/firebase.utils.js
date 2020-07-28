import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDtC0swWS6cfVnrffy5wkxOncJkDDzAKh8",
  authDomain: "shyftbase-shiby-adoption.firebaseapp.com",
  databaseURL: "https://shyftbase-shiby-adoption.firebaseio.com",
  projectId: "shyftbase-shiby-adoption",
  storageBucket: "shyftbase-shiby-adoption.appspot.com",
  messagingSenderId: "413942433045",
  appId: "1:413942433045:web:e6599104f8ee3f0bd3551c",
  measurementId: "G-LZWQCT98QM"
};

export const getDogGnerated = async () => {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  const docRef = firestore.collection('dogs').doc(`${randomNumber}`);
  await docRef.get().then(function (doc) {
    if (doc.exists) {
      return doc.data();
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch(function (error) {
    console.log("Error getting document:", error);
  });
}

export const createUser = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userData = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userData.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userData.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.log('error: ', err.message);
    }
  }

  return userData;
};

export const createOrder = async (dogData, user) => {
  const orderRef = firestore.collection(`orders`);
  const { displayName, email } = user;
  const createdAt = new Date();
  try {
    orderRef.doc().set({
      'dogId': dogData.dogId,
      createdAt,
      displayName,
      email
    });
    return true;
  } catch (err) {
    console.log('error: ', err.message);
    return false;
  }
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account ' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;