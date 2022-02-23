// // import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';
// // import * as firebase from 'firebase'
// import { initializeApp } from "firebase/app";
// import firebase from 'firebase/compat/app';
// require('firebase/auth');

// const config = {
//   apiKey: 'AIzaSyB61BhinTOcai6l1yPSklqU-R7nH_At4_s',
//   authDomain: 'crwn-db-360d8.firebaseapp.com',
//   projectId: 'crwn-db-360d8',
//   storageBucket: 'crwn-db-360d8.appspot.com',
//   messagingSenderId: '56840816689',
//   appId: '1:56840816689:web:ba5640756ed4ee50762d10',
// };

// // firebase.intializeApp(config);
// export const app = initializeApp(config);

// // firebase.initializeApp(config);
// // var db = firebase.firestore();



// firebase.initializeApp(config);
// var db = firebase.firestore();


// export const auth = firebase.auth();

// export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();

// provider.setCustomParameters({prompt: 'select_account'})

// export const signInWithGoogle = () => auth.signInWithGoogle(provider);

// export default app;


import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyB61BhinTOcai6l1yPSklqU-R7nH_At4_s',
  authDomain: 'crwn-db-360d8.firebaseapp.com',
  databaseURL: 'https://crwn-db-360d8.firebaseio.com',
  projectId: 'crwn-db-360d8',
  storageBucket: 'crwn-db-360d8.appspot.com',
  messagingSenderId: '56840816689',
  appId: '1:56840816689:web:ba5640756ed4ee50762d10',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;







//below is mine

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: 'AIzaSyB61BhinTOcai6l1yPSklqU-R7nH_At4_s',
//   authDomain: 'crwn-db-360d8.firebaseapp.com',
//   projectId: 'crwn-db-360d8',
//   storageBucket: 'crwn-db-360d8.appspot.com',
//   messagingSenderId: '56840816689',
//   appId: '1:56840816689:web:ba5640756ed4ee50762d10',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// export default app;