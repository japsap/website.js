import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAogzz0etQIgKoixfdzaDRMvNkb6BkSZl0",
    authDomain: "login2-f5d0f.firebaseapp.com",
    projectId: "login2-f5d0f",
    storageBucket: "login2-f5d0f.appspot.com",
    messagingSenderId: "694828819828",
    appId: "1:694828819828:web:8729fbe77b34a1b82eb821"
  };

  const fire  = firebase.initializeApp(firebaseConfig);

export default fire