import config from './firebaseConfig';
import * as firebase from "firebase";

firebase.initializeApp(config);

export default firebase;
