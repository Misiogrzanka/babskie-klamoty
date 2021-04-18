import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyCN7jO-2R6RysbniKy8GkjEZJA8GwqGqlg',
	authDomain: 'babskie-klamoty.firebaseapp.com',
	projectId: 'babskie-klamoty',
	storageBucket: 'babskie-klamoty.appspot.com',
	messagingSenderId: '39908803782',
	appId: '1:39908803782:web:524140ae79635bd3a903c7',
	measurementId: 'G-GXF2K3SKQK',
};

//INITIALIZE FIREBASE

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const analytics = firebase.analytics();

//EXPORT SOCKETS

export { auth, provider, analytics };
export default db;
