import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDanTSnDxdhj12WK2NA2A1Gq9jW6Aa_WT8",
  authDomain: "portfolio-b9268.firebaseapp.com",
  projectId: "portfolio-b9268",
  storageBucket: "portfolio-b9268.firebasestorage.app",
  messagingSenderId: "534732834407",
  appId: "1:534732834407:web:f910b2b4eeff8858f7b6c2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };