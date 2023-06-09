import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDCAgtjYIYKXC7A2R-HNvCfOs-ki5CO8RA",
  authDomain: "jamimart-42f26.firebaseapp.com",
  projectId: "jamimart-42f26",
  storageBucket: "jamimart-42f26.appspot.com",
  messagingSenderId: "882327376976",
  appId: "1:882327376976:web:3e737c6e9904524ac16d55",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
