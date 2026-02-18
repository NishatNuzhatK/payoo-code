console.log("Cashout connected")

document.getElementById('cashout-btn').addEventListener('click', function(){

    // 1. get agent number and validate
    const cashoutNumberInput = document.getElementById('cashout-number');

    const cashoutNumber = cashoutNumberInput.value;
    console.log(cashoutNumber);
    if(cashoutNumber.length !=  11){
        alert('invalid agent number');
        return;
    }

    // 2. get the amount
    const cashoutAmountInput = document.getElementById('cashout-amount');
    const cashoutAmount = cashoutAmountInput.value;
    console.log(cashoutAmount);

    // 3. get current balance
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    console.log(balance)
    // 4. calculate new balance
    const newBalance = Number(balance) - Number(cashoutAmount);
    

    if(newBalance < 0 ){
        alert('invalid amount');
        return;
    }

    // 5.get the pin and verify
    const cashoutPinInput = document.getElementById('cashout-pin');
    const pin = cashoutPinInput.value;

    if(pin === '1234'){
 // 5.1 if true- show an alert > set balance

 alert('cashout successful!')
 console.log(newBalance);
 balanceElement.innerText = newBalance;
    }

    else{

        //5.2 if false- show an error alert > return

        alert('invalid pin');
        return;
    }
    
    
    
});