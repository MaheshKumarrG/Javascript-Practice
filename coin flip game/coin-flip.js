let result = '';
let guess = '';
let score = {
    'wins':0,
    'lose':0
};

function playGame(guess){
    let displayElem1 = document.querySelector('.js-show-move');
    let displayElem2 = document.querySelector('.js-show-compMove');
    let displayResult = document.querySelector('.js-show-result');
    

    displayElem1.innerHTML ='';
    displayElem2.innerHTML ='';
    displayResult.innerHTML ='';

    let coinFlip = Math.random();
    if (coinFlip < 0.5) result = 'Heads';
    else if (coinFlip > 0.5) result = 'Tails';
    console.log(result);
    
    displayElem1.innerHTML = `Your Choice: ${guess}`;
    displayElem2.innerHTML = `Computer Choice: ${result}`;

    if (guess === result) {
        displayResult.innerHTML = 'You Win';
        score.wins++;

    }  else {
        displayResult.innerHTML = 'You lose';
        score.lose++;
    }
    console.log(score);
}
