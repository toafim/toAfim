import * as firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyDzfDa-MsSYnEN1GfNzsDX1gvQ8pEH6LtQ',
  authDomain: 'toafim-a45aa.firebaseapp.com',
  databaseURL: 'https://toafim-a45aa.firebaseio.com',
  projectId: 'toafim-a45aa',
  storageBucket: 'toafim-a45aa.appspot.com',
  messagingSenderId: '525771061324'
}
firebase.initializeApp(config)

export default firebase
