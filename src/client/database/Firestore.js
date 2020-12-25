import firebase from "./FirebaseConfig";

const db = firebase.firestore();

export const studentRef = db.collection("students");
export const tutorRef = db.collection("tutors");
