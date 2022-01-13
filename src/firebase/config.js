import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {

  apiKey: "AIzaSyCHtZ2i2mpmV_7HiGSV4FFGptcqdHfKqz4",

  authDomain: "muso-ninjas-e4cb1.firebaseapp.com",

  projectId: "muso-ninjas-e4cb1",

  storageBucket: "muso-ninjas-e4cb1.appspot.com",

  messagingSenderId: "576252996210",

  appId: "1:576252996210:web:83ac203742f2cf7b2270eb"

};
// Init firebase
firebase.initializeApp(firebaseConfig)

// Init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// Timestampo
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }