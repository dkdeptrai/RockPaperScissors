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
    loseResult = `You lose! Computer's ${computer} beats your ${player} !`;
    winResult = `You win! Your ${player} beats Computer's ${computer} !`;
    if(player===computer) {
        return resPanel.textContent = `Draw! Both you and Computer choose ${player}!`;
    } else if(player === 'Rock') {
        if(computer === 'Paper') {
            return resPanel.textContent = loseResult;
        } else {
            return resPanel.textContent = winResult;
        }
    } else if(player === 'Paper') {
        if(computer === 'Scissors') {
            return resPanel.textContent = loseResult;
        } else {
            return resPanel.textContent = winResult;
        }
    } else if(player === 'Scissors') {
        if(computer === 'Rocks') {
            return resPanel.textContent = loseResult;
        } else {
            return resPanel.textContent = winResult;
        }
    }
}

function updateScore(result) {
    if(result.includes('lose')) {
        cScore++;
    } else if( result.includes('win')) {
        pScore++;
    }
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
}

function gameEndCheck() {
    if(pScore === 5) return resPanel.textContent = 'You win! Congratulations';
    if(cScore === 5) return resPanel.textContent = 'You lose! Better luck next time!';
}

const resPanel = document.querySelector('.result');
const playerScore = document.querySelector('#player');
const computerScore = document.querySelector('#computer');
let pScore = 0;
let cScore = 0;

const btns = document.querySelectorAll('.choice');
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let result = playRound(btn.textContent, computerPlay());
        updateScore(result);
        if(gameEndCheck()) {
            pScore = cScore = 0;
        }
    })
});




