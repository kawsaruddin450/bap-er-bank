//step-1: add event handler
document.getElementById('btn-withdraw').addEventListener('click', function(){
    //step-2: get the input amount
    const withdrawAmount = getAmount('withdraw-amount');

    //step-3: get current balance
    const balanceNow = getElement('balance-total')
    const currentBalance = getElementValue('balance-total')

    //step-4: check if the withdraw amount is less than total balance or not
    if(withdrawAmount>currentBalance){
        alert("Sorry, You don't have sufficient balance!");
    }
    else{
        //step-5: get total withdraw
        const currentWithdrawTotal = getElementValue('withdraw-total')

        //step-6: update withdraw total
        const withdrawNow = getElement('withdraw-total')
        withdrawNow.innerText = currentWithdrawTotal + withdrawAmount;

        //step-7: update balance total
        balanceNow.innerText = currentBalance - withdrawAmount;
    }
})