import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyA-iOI7x9_4kJgRUBRtll9LukA0aI7qtd0",
  authDomain: "fy2025.firebaseapp.com",
  projectId: "fy2025",
  databaseURL: "https://fy2025-default-rtdb.firebaseio.com", 
  storageBucket: "fy2025.appspot.com",
  messagingSenderId: "622995456838",
  appId: "1:622995456838:web:d7a9b24d2f35c429191b47"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const validUsername = "admin";
const validPassword = "admin12";

function checkLogin(username, password) {
  if (username === validUsername && password === validPassword) {
    set(ref(db, 'users/' + username), {
      username: username,
      password: password
    })
    .then(() => {
      localStorage.setItem("isLoggedIn", "true"); 
      window.location.href = "index2.html";  
    })
    .catch((error) => {
      alert("Error saving user data: " + error.message); 
    });
  } else {
  }
}


document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); 

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    checkLogin(username, password); 
  } else {
    alert("Please enter both username and password.");
  }
});
