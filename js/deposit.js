//step-1: add event handler
document.getElementById('btn-deposit').addEventListener('click', function(){
    //step-2: get the deposit amount
    const depositAmount = getAmount('deposit-amount');

    //step-3: get current deposit total
    const depositTotal = getElementValue('deposit-total')

    //step-4: update the deposit total
    const previousDepositTotal = getElement('deposit-total');
    previousDepositTotal.innerText = depositTotal + depositAmount;

    //step-5: get the current balance
    const currentBalanceTotal = getElementValue('balance-total');

    //step-6: update the balance
    const balanceNow = getElement('balance-total');
    balanceNow.innerText = currentBalanceTotal + depositAmount;

    //step-7: clear the input field
})