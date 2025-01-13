let quantity = 0;

function QntShow(quantity){
    let showQntElem = document.querySelector('.js-show-quantity');
    showQntElem.innerHTML = `Cart Quantity: ${quantity}`;
}




function calCost() {
    let inputElem = document.querySelector('.js-cost-input');
    let inputVal = Number(inputElem.value);
    let costElem = document.querySelector('.js-final-cost');

    if(inputVal < 0) costElem.innerHTML = 'Error:cost can\'t be less than zero';
    else if (inputVal < 40) costElem.innerHTML = ((inputVal * 100) + 1000) / 100;
    else costElem.innerHTML = inputVal;
}