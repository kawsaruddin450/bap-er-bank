//function for getting input value
function getAmount(id){
    const input = document.getElementById(id);
    const amount = parseFloat(input.value);
    input.value = '';
    return amount;
}

//get element by id function
function getElement(id){
    const element = document.getElementById(id);
    return element;
}

//function for getting total value
function getElementValue(id){
    const element = getElement(id);
    const total = parseFloat(element.innerText);
    return total;
}