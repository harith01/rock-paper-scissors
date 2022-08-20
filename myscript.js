function getComputerChoice(){
    const elements = ['Rock', 'Paper', 'Scissors'];
    const selection = elements[Math.floor(Math.random()*elements.length)];
    return selection
}

