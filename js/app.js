function generatePin() {
  
 
    const pin =Math.round(Math.random()*10000);
    const pinNumber = pin + " ";
    if(pinNumber.length==4){
        return pinNumber;
    }
    else{
        generatePin();
    }
    document.getElementById('display-pin').value = pin;
    console.log(typeof(pin));
}

document.getElementById('key-pad').addEventListener('click',function(e){
    const number =  e.target.innerText;
    const numberInput = document.getElementById('typed-numbers');
    // const numberValue=numberInput.value;

    if (isNaN(number)) {
        if(number == 'C'){
            numberInput.value = "";
        }

    }
   else{
        const newNumber = numberInput.value + number;
        numberInput.value = newNumber;

    }
 
}) 

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if (pin == typedNumbers) {
        successMessage.style.display = 'block';
        failError.style.display = 'none';
    }
    else {
        successMessage.style.display = 'none';
        failError.style.display = 'block';
    }
}

 
 