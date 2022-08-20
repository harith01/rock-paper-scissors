function getComputerChoice(){
    const elements = ['Rock', 'Paper', 'Scissors'];
    const selection = elements[Math.floor(Math.random()*elements.length)];
    return selection
}

function playRound(playerSelection, computerSelection){
    let outcome;
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        outcome = 'Tied!!!';
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissors'){
        outcome = 'You Win! Rock blunts Scissors';
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'paper'){
        outcome = 'You Lose! Paper Covers Rock';
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'scissors'){
        outcome = 'You Lose! Scissors cuts Paper';
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock'){
        outcome = 'You Win! Paper covers rock';
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'paper'){
        outcome = 'You Win! Scissors cuts Paper';
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'rock'){
        outcome = 'You Lose! Rock blunts Scissors';
    }
    return outcome
}