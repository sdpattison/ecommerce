import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBZZB3kF-0CqCVbpvb10mk6ZiVx3P5BZ6c",
    authDomain: "ecommerce-db-ce816.firebaseapp.com",
    projectId: "ecommerce-db-ce816",
    storageBucket: "ecommerce-db-ce816.appspot.com",
    messagingSenderId: "276318309150",
    appId: "1:276318309150:web:1853eec0b5fe07c37f570f",
    measurementId: "G-Y7L0T4XHY7"
};

export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log("error creating user", error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({"prompt": "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;