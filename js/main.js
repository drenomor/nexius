function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);    
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    
    showSumPrice(price, amountNumber)
}

function showSumPrice(price = 1000, amountNumber = 1) {
    let showAmount = document.querySelector("span.show-amount");
    if( amountNumber > 10 ) {
        alert("Maximum 10 teméket vásárolhat!");
    } else if ( amountNumber < 1 ) {
        alert("Minimum 1 terméket kell vásárolnia!");
    } else {
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
    }
}
/*
// Clean code
// Nevek
let n;
let nrOfProducts;
let numberOfProducts;

// Ne legyen a név félrevezető.

function multiplier(x,y) {
    return x * y;
}

// Kerüld az O és I
let IO; let l0;

// Komment: egy soros

// Felesleges: This function gives roles of user.
function getUserRoles(user, roles, id) {
    if ( user.admin) {
        return user.roles;
    } else {
        return user.roleObject;
    }
}

// Találat az összes alfabetikus karakterre m és n között.
let idPattern = /m[a-z]n/;

// Formázás, behúzás
// Függvény max 4-6 sor, 10 felett már túl hosszú,
// érdemes ketté bontani két külön fgv-be.
// Függvény neve, (ige legyen: Mit csinál?)
// Függvény bemenő adat 3-nál több ne legyen ha lehet.
*/