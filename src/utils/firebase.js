import * as firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA3m6XN7a18ipOMbmWEb_6VlPSBu8NHswo",
  authDomain: "budgetvue.firebaseapp.com",
  projectId: "budgetvue",
  storageBucket: "budgetvue.appspot.com",
  messagingSenderId: "645188678733",
  appId: "1:645188678733:web:02be352f58204e94365804",
  measurementId: "G-X5T8Q2H9DC",
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

const usersCollection = db.collection('users')
const accountsCollection = db.collection('accounts')
const transactionsCollection = db.collection('transactions')

export {
  db,
  auth,
  usersCollection,
  accountsCollection,
  transactionsCollection
}