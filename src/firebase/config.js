import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
        apiKey: "AIzaSyCfL8uKi5UaGOOVbMA4ZNbiJ3CIV-O6SsE",
        authDomain: "auth-dev-theerap.firebaseapp.com",
        databaseURL: "https://auth-dev-theerap-default-rtdb.firebaseio.com",
        projectId: "auth-dev-theerap",
        storageBucket: "auth-dev-theerap.appspot.com",
        messagingSenderId: "298084733153",
        appId: "1:298084733153:web:77788962bbbec195d7e7a0"
});

export default firebaseConfig;