function getComputerChoice(){
    const elements = ['Rock', 'Paper', 'Scissors'];
    const selection = elements[Math.floor(Math.random()*elements.length)];
    return selection
}

function playRound(playerSelection, computerSelection){
    let outcome;
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        // outcome = 'Tied!!!';
        outcome = 0;
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissors'){
        // outcome = 'You Win! Rock blunts Scissors';
        outcome = 1
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'paper'){
        // outcome = 'You Lose! Paper Covers Rock';
        outcome = -1;
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'scissors'){
        // outcome = 'You Lose! Scissors cuts Paper';
        outcome = -1;
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock'){
        // outcome = 'You Win! Paper covers rock';
        outcome = 1;
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'paper'){
        // outcome = 'You Win! Scissors cuts Paper';
        outcome = 1;
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'rock'){
        // outcome = 'You Lose! Rock blunts Scissors';
        outcome = -1;
    }
    return outcome
}

function game(){
    let win = 0;
    let lose = 0;
    let tie = 0;
    for (let i = 0; i < 5; i++){
        playerChoice = prompt('Choose Rock/Paper/Scissors');
        computerChoice = getComputerChoice();
        outcome = playRound(playerChoice, computerChoice);
        switch (outcome){
            case 0:
                tie++;
                console.log('Tied');
            break;
            case 1:
                win++;
                console.log('You Win!');
            break;
            case -1:
                lose++;
                console.log('You Lost!');
        }
    }
    if (win > lose){
        console.log('You are the Winner');
    } else if (win == lose){
        console.log('The game is Tied');
    } else {
        console.log('You are the loser');
    }
}