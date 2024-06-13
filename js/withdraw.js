// step 1: add event listener
document.getElementById('btn-withdraw').addEventListener('click', function(){
    //step 2: get the withdraw amount from input field
    const withdrawAmount = document.getElementById('withdraw-input').value;

    //step 3: get the current withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);

    // step 4: get the total balance and check if withdraw amount is higher than balance or not
    const balanceTotal = document.getElementById('balance-total').innerText;
    if(parseFloat(withdrawAmount) > balanceTotal){
        alert("Sorry, You don't have sufficient balance!");
    }
    else if(withdrawAmount == ''){
        alert("Please provide an amount");
    }
    else{
        //step 5: set new withdraw total
        withdrawTotalElement.innerText = previousWithdrawTotal + parseFloat(withdrawAmount);

        //step 6: subtract the total and set new total amount
        newBalance = balanceTotal - parseFloat(withdrawAmount);
        document.getElementById('balance-total').innerText = newBalance;
    }

    //step 7: clear the input field
    document.getElementById('withdraw-input').value = '';
})