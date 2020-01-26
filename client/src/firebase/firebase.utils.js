import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCEoihG_P7XVzHe_vat6L1U4DoBll5MgJk",
  authDomain: "crown-db-a5810.firebaseapp.com",
  databaseURL: "https://crown-db-a5810.firebaseio.com",
  projectId: "crown-db-a5810",
  storageBucket: "",
  messagingSenderId: "200724092996",
  appId: "1:200724092996:web:26a1f6e68d320e57c9c411",
  measurementId: "G-24FF87JHG1"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  /* If user does not exist in our db */
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }
  return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  await batch
    .commit()
    .then(() => console.log('Collections loaded successfully!'))
    .catch(error => console.log("Error loading data", error));
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
//export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

//https://firebase.google.com/docs/auth/web/twitter-login
export const twitterProvider = new firebase.auth.TwitterAuthProvider();
//export const singInWithTwitter = () => firebase.auth().signInWithPopup(twitterProvider)
//	.then(function(result) {
//		// This gives you a the Twitter OAuth 1.0 Access Token and Secret.
//		// You can use these server side with your app's credentials to access the Twitter API.
//		var token = result.credential.accessToken;
//		var secret = result.credential.secret;
//		// The signed-in user info.
//		var user = result.user;
//		// ...
//		console.log("user=" + user + " token=" + token + " secret=" + secret);
//		console.log("user=" + user);
//	}).catch(function(error) {
//		// Handle Errors here.
//		var errorCode = error.code;
//		var errorMessage = error.message;
//
//		// The email of the user's account used.
//		var email = error.email;
//
//		// The firebase.auth.AuthCredential type that was used.
//		var credential = error.credential;
//		// ...
//		console.log("errorCode=" + errorCode + " error msg=" + errorMessage + " email=" + email + "credential=" + credential);
//	});

// https://firebase.google.com/docs/auth/web/github-auth
export const githubProvider = new firebase.auth.GithubAuthProvider();
githubProvider.setCustomParameters({ 'allow_signup': 'false' });
//export const singInWithGithub = () => firebase.auth().signInWithPopup(githubProvider);


export default firebase;
