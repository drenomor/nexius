function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    let amount = parseInt(amountInput.value) * price;
    let amountNumber = parseInt(amountInput.value);

    if( amountNumber > 10) {
        alert("Maximum 10 teméket vásárolhat!");
        return;
    } else if ( amountNumber < 1) {
        alert("Minimum 1 terméket kell vásárolnia!")
    } else {
        let amountNumber = parseInt( amountInput.value) * price;
        showAmount.innerHTML = amount;
    }
}
