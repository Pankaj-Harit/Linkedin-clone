
import { getAuth } from '@firebase/auth';
import { initializeApp } from 'firebase/app';

import { collection , getFirestore , query , orderBy } from './config/firebasedependencies'



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_KQL7MwOMNvTi9170LJpnOA0_gq8-P68",
  authDomain: "linkedin-clone-df33c.firebaseapp.com",
  projectId: "linkedin-clone-df33c",
  storageBucket: "linkedin-clone-df33c.appspot.com",
  messagingSenderId: "943689572173",
  appId: "1:943689572173:web:431b2bf9cd0d289f55e104"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =  getFirestore(app);
const auth = getAuth();

const getCollection = collection(db, "posts");

const orderedList = query(getCollection, orderBy("CreatedAt", "desc"));

export  { getCollection, orderedList , auth };