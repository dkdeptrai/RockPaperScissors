console.log('Hello World');

function computerPlay() {
    const options = ['Rock', 'Paper', "Scissors"];
    let ran = Math.floor(Math.random() * 3);
    return options[ran];
}

function standardize(str) {
    res = str[0].toUpperCase();
    for(let i = 1; i < str.length; i++) {
        res += str[i].toLowerCase();
    }
    return res;
}

function playRound(player, computer) {
    loseResult = `You lose! Computer: ${computer} beats Player: ${player} !`;
    winResult = `You win! Player: ${player} beats Computer: ${computer} !`;
    if(player===computer) {
        return `Draw! Player: ${player} and Computer: ${computer} are equal!`;
    } else if(player === 'Rock') {
        if(computer === 'Paper') {
            return loseResult;
        } else {
            return winResult;
        }
    } else if(player === 'Paper') {
        if(computer === 'Scissors') {
            return loseResult;
        } else {
            return winResult;
        }
    } else if(player === 'Scissors') {
        if(computer === 'Rocks') {
            return loseResult;
        } else {
            return winResult;
        }
    } else {
        return 'Invalid choice'
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        player = prompt('Choose Rock, Paper or Scissors', '');
        player = standardize(player);
        computer = computerPlay();
        let result = playRound(player,computer);
        console.log(result);
        if(result.includes('lose')) {
            computerScore++;
        } else if( result.includes('win')) {
            playerScore++;
        }   
    }

    console.log(`Result: Player ${playerScore} | Computer: ${computerScore}`);
    if(playerScore > computerScore) {
        console.log('Congratulations, you won');
    } else if (playerScore < computerScore) {
        console.log('You lose! Gook luck next time!');
    } else {
        console.log('Draw');
    }
}

game();