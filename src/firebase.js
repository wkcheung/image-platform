import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyCoATjw-Px7x2m4PbBGvNio_eBVptCZdQ8",
	authDomain: "image-platform.firebaseapp.com",
	databaseURL: "https://image-platform.firebaseio.com",
	projectId: "image-platform",
	storageBucket: "image-platform.appspot.com",
	messagingSenderId: "702110788648"
};

  
export const firebaseApp = firebase.initializeApp(config);