function computerPlay(){
    let choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    let choiceDict = {rock: 0, paper: 1, scissors: 2};

    if(choiceDict.hasOwnProperty(playerSelection.toLowerCase()) == false){
        return "its not that hard to type rock, paper, or scissors"
    }


    let playerIndex = choiceDict[playerSelection.toLowerCase()];
    let computerIndex = choiceDict[computerSelection.toLowerCase()];

    let resultMatrix = [[0,2,1],
                        [1,0,2],
                        [2,1,0]];

    let results = ["tie", "you win " + playerSelection + " beats " + computerSelection, "you lose " + computerSelection + " beats " + playerSelection];

    return results[resultMatrix[playerIndex][computerIndex]];
  }

function game(){
    for (let i = 0; i < 5; i++) {
        let userChoice = prompt("Choose Rock, Paper, or Scissors");
        alert(playRound(userChoice, "scissors"));
        console.log(playRound(userChoice, "scissors"));
     }
}

// game()
