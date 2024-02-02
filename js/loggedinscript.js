/* document.addEventListener("DOMContentLoaded", () => {
    const userDataString = sessionStorage.getItem(`userData`)
    if (userDataString) {
        const user = JSON.parse(userDataString);
        document.querySelector(".name").innerText = `Välkommen: ${user.name}`;
        document.querySelector(".saldo").innerText = `Ditt saldo: ${user.saldo} kronor`;
        document.querySelector(".loggad").innerText = `Inloggad användare: ${user.username}`;

        document.querySelector("button.saldoIn").addEventListener("click", () => {
            let cash = parseFloat(document.querySelector("input").value);

            if(!isNaN(cash)) {
                user.saldo = user.saldo + cash;
                document.querySelector(".saldo").innerText = `Ditt saldo: ${user.saldo} kronor`;
                console.log(user.saldo)
            }
            
        document.querySelector("button.saldoOut").addEventListener("click", () => {
            let cashOut = parseFloat(document.querySelector("input").value);
            
            if(!isNaN(cashOut)) {
                user.saldo = user.saldo - cashOut;
                document.querySelector(".saldo").innerText = `Ditt saldo: ${user.saldo} kronor`;
                console.log(user.saldo)
            }
        })
        })
    } else {
        console.log("Användardata saknas.");
    }
});

*/


document.addEventListener("DOMContentLoaded", () => {
    const userDataString = sessionStorage.getItem(`userData`)
    if (userDataString) {
        const user = JSON.parse(userDataString);
        document.querySelector(".name").innerText = `Välkommen: ${user.name}`;
        document.querySelector(".saldo").innerText = `Ditt saldo: ${user.saldo} kronor`;
        document.querySelector(".loggad").innerText = `Inloggad användare: ${user.username}`;

        document.querySelector("button.saldoIn").addEventListener("click", () => {
            handleTransaction(true);
        });

        document.querySelector("button.saldoOut").addEventListener("click", () => {
            handleTransaction(false);
        });

        function handleTransaction(isDeposit) {
            let cash = parseFloat(document.querySelector("input").value);

            if (!isNaN(cash) && cash >= 0) {
                if (isDeposit) {
                    user.saldo = user.saldo + cash;
                    document.querySelector("p.info").innerText = "";
                } else {
                    if(user.saldo >= cash) {
                    user.saldo = user.saldo - cash;
                    document.querySelector("p.info").innerText = "";

                } else {
                    document.querySelector("p.info").innerText = "Otillräcklig täckning på kontot";
                }}

                document.querySelector(".saldo").innerText = `Ditt saldo: ${user.saldo} kronor`;
                console.log(user.saldo);
            } else {
                document.querySelector("p.info").innerText = "Vänligen ange ett giltigt belopp.";
            }
        }
    } else {
        console.log("Användardata saknas.");
    }
});