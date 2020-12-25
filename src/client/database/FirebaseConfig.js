import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAUKJNvYC8ywbn4iIAyxow5Ogb_FI6rMzE',
  authDomain: 'deepdiveclasses.firebaseapp.com',
  projectId: 'deepdiveclasses',
  storageBucket: 'deepdiveclasses.appspot.com',
  messagingSenderId: '490728446809',
  appId: '1:490728446809:web:20ac77e5c747f22ef88a48',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
