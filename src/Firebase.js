import 'dotenv/config';
import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyDl6y9iUiPyDonfRKvoOLIaGyIme3Yvtlw",
  authDomain: "junction19-e8110.firebaseapp.com",
  databaseURL: "https://junction19-e8110.firebaseio.com",
  projectId: "junction19-e8110",
  storageBucket: "junction19-e8110.appspot.com",
  messagingSenderId: "918871343305"
};

firebase.initializeApp(config);

export default firebase;
