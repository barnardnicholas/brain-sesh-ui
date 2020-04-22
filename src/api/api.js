// Import Firebase
import * as firebase from "firebase";

// Auth variables
import * as auth from "../auth/firebase-auth";
// import * as auth from "../env_variables/env";

// Initialize Firebase
firebase.initializeApp(auth.firebaseConfig);
firebase.analytics();

// Database functions --------------------------------------

// Database Reference
const database = firebase.database();

export const getAllQuizzes = (cb) => {
  const allQuizzesRef = database.ref("/quizzes");
  allQuizzesRef.on("value", (snapshot) => {
    // console.log(snapshot.val());
    cb(snapshot.val());
    return snapshot.val();
  });
};

export const getQuizByID = (id, cb) => {
  const singleQuizRef = database.ref(`/quizzes/${id}`);
  singleQuizRef.on("value", (snapshot) => {
    cb(snapshot.val());
    return snapshot.val();
  });
};

export const postQuiz = (id, data, cb) => {
  database.ref(`/quizzes/${id}`).set(data);
  const newQuizRef = database.ref(`/quizzes/${id}`);
  newQuizRef.on("value", (snapshot) => {
    console.log(snapshot.val());
    cb(snapshot.val());
    return snapshot.val();
  });
};

// User Authentication --------------------------------------

export const userSignIn = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      console.dir(response);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};
