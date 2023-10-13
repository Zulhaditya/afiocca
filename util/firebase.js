import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdJoqrpP8yaIv-pzyDJNpELHpd0-4sicQ",
  authDomain: "affioca.firebaseapp.com",
  projectId: "affioca",
  storageBucket: "affioca.appspot.com",
  messagingSenderId: "96558949440",
  appId: "1:96558949440:web:4f912d137cff77cc8e6ba5"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

