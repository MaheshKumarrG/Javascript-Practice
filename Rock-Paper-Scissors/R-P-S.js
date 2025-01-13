let Score = JSON.parse(localStorage.getItem('Score')) || { win: 0, lose: 0, tie: 0 };

document.querySelector('.js-score')
    .innerHTML = `Wins:${Score.win} Loss:${Score.lose} Ties:${Score.tie}`;



let intervalID;
let isPlaying = true;
let autoPlayBtn = document.querySelector('.js-autoplay-btn');
function autoPlay(){
    if(isPlaying){
        intervalID = setInterval(function(){
            let playerMove = computerMove();
            playGame(playerMove);
        },1000);
        isPlaying = false;
        autoPlayBtn.innerHTML = 'stop playing';
    }else{
        clearInterval(intervalID);
        isPlaying = true;
        autoPlayBtn.innerHTML = 'auto play';
    }    
}

function playGame(playerMove) {
    let computerChoice = computerMove();

    let result = '';
    if (playerMove === 'Scissors') {
        if (computerChoice === 'Rock') result = 'lose';
        else if (computerChoice === 'Scissors') result = 'tie';
        else if (computerChoice === 'Paper') result = 'win';
    }
    if (playerMove === 'Paper') {
        if (computerChoice === 'Rock') result = 'win';
        else if (computerChoice === 'Scissors') result = 'lose';
        else if (computerChoice === 'Paper') result = 'tie';
    }
    if (playerMove === 'Rock') {
        if (computerChoice === 'Rock') result = 'tie';
        else if (computerChoice === 'Scissors') result = 'win';
        else if (computerChoice === 'Paper') result = 'lose';
    }
    if (playerMove === 'Reset') {
        document.querySelector('.js-confirm')
            .innerHTML = `Are you sure you want to reset the score? 
                            <button onclick = "confirmReset('Yes')">
                                Yes
                            </button>   
                            <button onclick = "confirmReset('No')">
                                No
                            </button>`
        
    }

    if (result === 'win') Score.win++;
    else if (result === 'lose') Score.lose++;
    else if (result === 'tie') Score.tie++;

    document.querySelector('.js-score')
        .innerHTML = `Wins:${Score.win} Loss:${Score.lose} Ties:${Score.tie}`;

    localStorage.setItem('Score', JSON.stringify(Score));

    if (result === 'win') document.querySelector('.js-result').innerHTML = `You won! Congrats brat!`;
    else if (result === 'tie') document.querySelector('.js-result').innerHTML = `It\'s a tie`;
    else if (result === 'lose') document.querySelector('.js-result').innerHTML = `You lost! You are a piece of cr@p!`;
}


function computerMove() {
    let computerChoice = '';

    const randomNum = Math.random();

    if (randomNum > 0 && randomNum < 1 / 3) computerChoice = 'Rock';
    else if (randomNum > 1 / 3 && randomNum < 2 / 3) computerChoice = 'Paper';
    else if (randomNum > 2 / 3 && randomNum < 1) computerChoice = 'Scissors';

    console.log(computerChoice);

    return computerChoice;
}

document.body.addEventListener('keydown',(event)=>{
    if(event.key === 'r' || event.key ==='R') playGame('Rock');
    if(event.key === 'p' || event.key ==='P') playGame('Paper');
    if(event.key === 's' || event.key ==='S') playGame('Scissors');
    if(event.key === 'Backspace') {
        document.querySelector('.js-confirm')
            .innerHTML = `Are you sure you want to reset the score? 
                            <button onclick = "confirmReset('Yes')">
                                Yes
                            </button>   
                            <button onclick = "confirmReset('No')">
                                No
                            </button>`
    };
    if(event.key === 'a' || event.key ==='A') autoPlay();
})

function confirmReset(msg){
    if(msg == 'Yes') {
        Score.win = 0;
        Score.lose = 0;
        Score.tie = 0;
        document.querySelector('.js-result')
            .innerHTML = '';
        localStorage.removeItem('Score');
        playGame('Reset');
        document.querySelector('.js-confirm')
            .innerHTML = '';
    }
    else {
        document.querySelector('.js-confirm')
            .innerHTML = '';
        return;
    }
}
