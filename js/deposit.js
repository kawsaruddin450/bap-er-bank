// step 1: add event listener
document.getElementById('btn-deposit').addEventListener('click', function(){
    //step 2: get the deposit amount from the input field
    const depositAmount = document.getElementById('deposit-input').value;

    //step 3: get the current deposit total
    const previousdepositTotal = document.getElementById('deposit-total');

    //step 4: add numbers to set the total deposit
    const newDepositTotal = parseFloat(previousdepositTotal.innerText) + parseFloat(depositAmount);
    previousdepositTotal.innerText = newDepositTotal;

    //step 5: get balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousbalanceTotal = parseFloat(balanceTotalElement.innerText);

    //step 6: update new balance by subtracting the deposit amount
    balanceTotalElement.innerText = previousbalanceTotal + parseFloat(depositAmount);

    //step 7: clear the input field
    document.getElementById('deposit-input').value = '';
})