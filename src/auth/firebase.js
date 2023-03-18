import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings
//! firebase console settings bölümünden firebaseconfig ayarlarını al
// TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBdLLlnI3uNxpOyQGr31Ap65o2dAidEkJM",
//   authDomain: "movie-app-1989.firebaseapp.com",
//   projectId: "movie-app-1989",
//   storageBucket: "movie-app-1989.appspot.com",
//   messagingSenderId: "11408427327",
//   appId: "1:11408427327:web:37d0e5ae97728048eeab8a"
// };

const firebaseConfig={
apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
