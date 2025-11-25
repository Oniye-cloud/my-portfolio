import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD8ic1z2739hkSl6qTtZ5jnPSuHEpGP_WE",
    authDomain: "ahmad-portfolio-a400b.firebaseapp.com",
    projectId: "ahmad-portfolio-a400b",
    storageBucket: "ahmad-portfolio-a400b.firebasestorage.app",
    messagingSenderId: "980469844000",
    appId: "1:980469844000:web:ab293b8631ceb108789445",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function addContactMessage(data) {
  const docRef = await addDoc(collection(db, "contacts"), {
    ...data,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
}