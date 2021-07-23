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


// import firebase from "firebase/app";
// import "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyBsI9Dw6g22WS5exuQauQ-8j5YCmAHhchc",
//     authDomain: "coderhouse-reactjs.firebaseapp.com",
//     projectId: "coderhouse-reactjs",
//     storageBucket: "coderhouse-reactjs.appspot.com",
//     messagingSenderId: "231574732582",
//     appId: "1:231574732582:web:c8d1ca9a166f2cb2570be7"
//   };

// const app = firebase.initializeApp(firebaseConfig);

// export const firestore = firebase.firestore(app);
