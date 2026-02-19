console.log('add money connected');

document.getElementById('add-money-btn').addEventListener('click', function(){
    // 1. bank account get
    const bankAccount = getValueFromInput('add-money-bank');

    if(bankAccount == 'select a bank'){
        alert('please select a bank');
        return;
    }

    // 2.get bank account numver

    const accno = getValueFromInput('add-money-number');

    if(accno.length != 11){
alert('invalid account number');
        return;
    }

    // 3. get amount
    const amount = getValueFromInput('add-money-amount');

    const newBalance = getBalance() + Number(amount);
    

    const pin = getValueFromInput('add-money-pin');

    if(pin == '1234'){
        alert (`add money successful from ${bankAccount} at ${new Date() }`);
        setBalance(newBalance);
    }

    else{
        alert('invalid pin');
        return;
    }
})