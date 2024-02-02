/* BankomatApp är ett program som låter en eller flera användare att logga in i systemet och sedan hantera insättning och uttag på användarens konto. 

Denna app har ett relativt enkelt gränssnitt. En skärm som visar informationen,  knappar 0-9 som skickar värdet till programmet och några kontroll knappar som logga in, avbryt, visa saldo, uttag och insättning.

I BankomatApp skall det finnas minst två användare. En användare i systemet definieras med fyra egenskaper, 

    namn
    användarnamn
    lösenord/kod
    saldo

Användaren måste vara inloggat i systemet för att kunna utföra operationer i BankomatAppen . En inloggat användare visas också på skärmen.

Bankomaten ska kunna utföra följande tjänster:

    logga in
    visa saldo
    insättning
    uttag
    logga ut
 */


/* Funktionen för att visa lösenord vid knapptryck */
document.addEventListener('DOMContentLoaded', () => {
    const passwordField = document.querySelector("input.password");
    const showPasswordBtn = document.querySelector("button.showPasswordBtn");

    showPasswordBtn.addEventListener("click", () => {
        if(passwordField.type === "password") {
            passwordField.type = "text";
        } else {
            passwordField.type = "password";
        }
    });
});

/* Här listas användarna */
let allusers = [
    { username: "soffi", password: "soffi123", name: "Sofia Sofiasdotter", saldo: 1000},
    { username: "pelle", password: "pelle456", name: "Per Persson", saldo: 1000},
    { username: "urbo", password: "urban789", name: "Urban Urbansson", saldo: 1000}
];

/* Login knappen till funktionen om kollar om autentieringen lyckas/misslyckas */
document.querySelector(".loginBtn").addEventListener("click", () => {
    auth()
})

/* Funktionen som tar input från user och kontrollerar om den godkänns genom loop */
function auth() {
    console.log("auth körs")
    let inputuser = document.querySelector(".username").value;
    let inputpassword = document.querySelector(".password").value;

    for (let i = 0; i < allusers.length; i++) {
        if (allusers[i].username === inputuser && allusers[i].password === inputpassword) {
            console.log("Du har loggat in!");
            saveUserData(allusers[i]);
            redirect([i]);
            return;
        } else {
            document.querySelector(".footerWrap p").innerText = "Fel användarnamn eller lösenord!"
        }
    }
}

/* Funktionen för att redirecta user till rätt dashboard */
function redirect() {
    window.location.href = "loggedin.html";
}

function saveUserData(user) {
    sessionStorage.setItem(`userData`, JSON.stringify(user));
}