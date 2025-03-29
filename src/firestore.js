// src/firestore.js
import { getFirestore } from 'firebase/firestore';
import app from './firebase';  // This imports your Firebase app from firebase.js

// Initialize Firestore and export it for use in other parts of your app.
const db = getFirestore(app);
export default db;
