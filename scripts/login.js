console.log('script connected');

document.getElementById('login-btn').addEventListener('click', function(){

    //1. get the mobile number input
    const numberInput = document.getElementById('input-number');

    const contactNumber = numberInput.value;

    //2. get the pin
    const inputPin = document.getElementById('input-pin');
    const pin = inputPin.value;
    console.log(pin);

    //3. match pin and mobile number
    if(contactNumber == '01234567890' && pin == "1234"){

        //3.1 if true ::> alert > homepage
        alert('login success');
        window.location.assign("/home.html")
    }

    //3.2 if false ::> alert > return
    else{
        alert('login failed');
        return;

    }
    
    
});