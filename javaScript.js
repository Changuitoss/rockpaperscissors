const posibilidades = ['rock', 'paper', 'scissors'];


const computerPlay = () => {
	var azar = Math.floor(Math.random() * 3)
	return posibilidades[azar];
}

var computerSelection = computerPlay();
const playerSelection = 'rock';

const round = (playerSelection, computerSelection) => {
	if(playerSelection == 'rock') {
		if (computerSelection == 'scissors') {
			console.log('You win! Rock beats scissors');
			return 'You win! Rock beats scissors';
		} else if(computerSelection == 'paper') {
			console.log('You lose! Paper beats Rock');
			return 'You win! Paper beats Rock';
		} else {
			console.log('It´s a tie!');
			return 'It´s a tie!';
		}
	}
}

round(playerSelection, computerSelection);