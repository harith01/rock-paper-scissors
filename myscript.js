function getComputerChoice(){
    const elements = ['Rock', 'Paper', 'Scissors'];
    const selection = elements[Math.floor(Math.random()*elements.length)];
    return selection
}

let win = 0;
let lose = 0;
let tie = 0;

function playRound(playerSelection){
    let computerSelection = getComputerChoice().toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    
    let outcome;
    if (playerSelection === computerSelection){
        
        outcome = 'Tie'
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') 
              || (playerSelection == 'paper' && computerSelection == 'rock')
              || (playerSelection == 'scissors' && computerSelection == 'paper')){
                win++;
                outcome = 'win'
                if (win === 5){
                 outcome = 'You won';
                 disableButtons();
                }
               

    } else if ((playerSelection == 'rock' && computerSelection == 'paper')
              ||(playerSelection == 'paper' && computerSelection == 'scissors')
              ||(playerSelection == 'scissors' && computerSelection == 'rock')){
                lose++;
                outcome = 'lose';
                if (lose === 5){
                 outcome = 'Computer Won';
                 disableButtons();
                }
                

    } 
    return document.getElementById('result').innerHTML = (`${outcome}!! Wins: ${win}, Loses: ${lose}`);
}

let buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', () => playRound(button.value)));

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}



let result = document.getElementById('result');
result.setAttribute('style', 'color: blue; font-size: large; margin: 20px');