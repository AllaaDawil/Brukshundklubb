// konstanta variabler lagrar förväntad namn och lösenord
const name = "Bella";
const password = "qwe123";

// Hämta elemnts med deras ID
const nameInput = document.getElementById("name1");
const passwordInput = document.getElementById("password1");
const loginBtn = document.getElementById("btn");
const logoutBtn = document.getElementById("out-btn");
const messageDiv = document.getElementById("message");

// kontrollera ifall användaren redan inloggad
const isLoggedIn = localStorage.getItem("isLoggedIn");

if (isLoggedIn === "true") {
    showLoggedInState();
} else {
    showLoggedOutState();
}

// Lägg till en eventlistener på inloggning knappen
loginBtn.addEventListener("click", function() {
    const enteredName = nameInput.value;
    const enteredPassword = passwordInput.value;

    if (enteredName === name && enteredPassword === password) {
        localStorage.setItem("isLoggedIn", "true");
        showLoggedInState();
    } else {
        showMessage("Fel användernamn/lösenord");
    }
});

// Lägg till en eventlistener på utloggning knappen
logoutBtn.addEventListener("click", function() {
    localStorage.removeItem("isLoggedIn");
    showLoggedOutState();
});
// Visa inloggning knapp och välkomnings text vid rätt inloggnings uppgifter
function showLoggedInState() {
    nameInput.style.display = "none";
    passwordInput.style.display = "none";
    loginBtn.style.display = "none";
    logoutBtn.style.display = "block";
    showMessage("Välkomen, du är inloggad");
}
// Visa utloggnings knapp och fel meddelande vid fel inloggnings uppgifter
function showLoggedOutState() {
    nameInput.style.display = "block";
    passwordInput.style.display = "block";
    loginBtn.style.display = "block";
    logoutBtn.style.display = "none";
    showMessage(""); // Funktion som rensar eventuella felmeddelanden som kan ha visats på sidan.
    nameInput.value = ""; //Rensa värdena i användernamn och lösenord fälten
    passwordInput.value = "";
}

function showMessage(message) {
    messageDiv.textContent = message;
}
showMessage() // funktionen kallas utan argument,  Rensar felmeddeland som kan ha visats
  












