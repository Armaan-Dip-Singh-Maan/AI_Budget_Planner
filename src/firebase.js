// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBzlYJrZ0RKp2PY-mOFsUtE0MG8U-RuYwg",          // Replace with your actual config values
  authDomain: "ai-budget-planner-5858a.firebaseapp.com",
  projectId: "ai-budget-planner-5858a",
  storageBucket: "ai-budget-planner-5858a.firebasestorage.app",
  messagingSenderId: "875439189240",
  appId: "1:875439189240:web:c03ac292a0ced4cae11f0d",
  measurementId: "G-33680YQ2YB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
