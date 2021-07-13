import firebase from "firebase/app";
import "@firebase/firestore"

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDClnZPZWQs3AtV8T4e_jgL8Y9Ry1wtyBc",
    authDomain: "silvipeppers-39d4f.firebaseapp.com",
    projectId: "silvipeppers-39d4f",
    storageBucket: "silvipeppers-39d4f.appspot.com",
    messagingSenderId: "127381270651",
    appId: "1:127381270651:web:b6ec0d4c0ef3fdd921f2de",
    measurementId: "G-37BT7DQR6F"
  });

export const getFirebase = () =>{
    return firebaseConfig
}

//Funciones de firebase

export const getFirestore = () =>{
    return firebase.firestore(firebaseConfig);
}

