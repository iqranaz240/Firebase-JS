    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyCqfdF2thW5atrQaW5wbGVpNKpD4RehSW0",
      authDomain: "smit-b2.firebaseapp.com",
      projectId: "smit-b2",
      storageBucket: "smit-b2.appspot.com",
      messagingSenderId: "688903714025",
      appId: "1:688903714025:web:095c9199c9fa31a463ac78",
      measurementId: "G-MGBWHNMVQG"
    };
  
    // Initialize Firebase
    export const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);