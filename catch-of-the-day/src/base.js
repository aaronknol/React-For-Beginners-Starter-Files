import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB4evANgl7Jvou24x_frwpZZe_BjRu14QE",
    authDomain: "catch-of-the-day-aaron-knol-2.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-aaron-knol-2.firebaseio.com",
    projectId: "catch-of-the-day-aaron-knol-2",
    storageBucket: "catch-of-the-day-aaron-knol-2.appspot.com",
    messagingSenderId: "321098642082",
    appId: "1:321098642082:web:84b8b6d431ad8d04571dfb"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;