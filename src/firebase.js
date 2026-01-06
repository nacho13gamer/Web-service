import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDr6Ha9RNHAFoF4_apZg3zELi7JLOWMTPQ",
  authDomain: "fortanell-service-b5d19.firebaseapp.com",
  databaseURL: "https://fortanell-service-b5d19-default-rtdb.firebaseio.com",  // EXACTA como en tu captura, SIN / AL FINAL
  projectId: "fortanell-service-b5d19",
  storageBucket: "fortanell-service-b5d19.appspot.com",
  messagingSenderId: "846702689612",
  appId: "1:846702689612:web:701d8d5de6b26a2c96e3e9",
  measurementId: "G-6CHQECZ878"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };