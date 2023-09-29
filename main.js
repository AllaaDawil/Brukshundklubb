
  

function storedinfo(){ //funktion som lagrar "namn" och "lösenord"
    localStorage.setItem("name", "Bella");    
    localStorage.setItem("password", "qwe123");
}
storedinfo();    // hämta indataelement och logga in knappen med deras ID:n
const nameInput = document.getElementById("name1");
const passInput = document.getElementById("password1");
const loginbutton = document.getElementById("btn");

document.getElementById("out-btn").style.visibility = "hidden"; //göm elementet logga ut knapp

const name = "Bella"  //konstanta variabler lagrar förväntad namn och lösenord
const password = "qwe123"

//Lägg till en eventlistener på inloggning knappen
loginbutton.addEventListener("click", function(){

    //Hämtar sparade "namnet" och "lösenordet" från lokala lagring
    const storedName = localStorage.getItem("name"); 
    const storedPassword = localStorage.getItem("password");
   
    //komtrollerar om de angivna värdena matchar de lagrad värdena
    if(nameInput.value === storedName && passInput.value === storedPassword){

        //Visa ett välkomnings meddelande om inloggnings data är rätt och gör logga ut knapp synlig
        document.getElementById("message").textContent = "Välkomen du är inloggad.";
        document.getElementById("out-btn").style.visibility = "visible";

    } else { //Visa fel information meddelande om inloggningen misslyckas
       document.getElementById("message").textContent = "Du gav fel information.";
      
    }
} );








