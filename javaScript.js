const posibilidades = ['rock', 'paper', 'scissors'];

var computerSelection;
var playerSelection;

var puntajePlayer = 0;
var puntajeAi = 0;
var roundsTotal = 0;


const computerPlay = () => {
	var azar = Math.floor(Math.random() * 3)
	return posibilidades[azar];
}

/*const playsRock = () => {
		console.log('ejecutando playsRock');
		if (playerSelection == 'rock') {
			if (computerSelection == 'scissors') {
				console.log('You win! Rock beats scissors');
				return puntajePlayer += 1;
			} else if(computerSelection == 'paper') {
				console.log('You lose! Paper beats Rock');
				return puntajeAi =+ 1;
			} else {
				console.log('It´s a tie!');
				return 'It´s a tie!';
			}
		}
}*/


const round = (playerSelection, computerSelection) => {
	playerSelection = prompt('choose your weapon').toLowerCase();
	var computerSelection = computerPlay();
	console.log('playerSelection: ', playerSelection);
	console.log('computerSelection: ', computerSelection);
	if (playerSelection == 'rock') {
		if (computerSelection == 'scissors') {
			console.log('You win! Rock beats scissors');
			return puntajePlayer += 1;
		} else if(computerSelection == 'paper') {
			console.log('You lose! Paper beats Rock');
			return puntajeAi =+ 1;
		} else {
			console.log('It´s a tie!');
			return 'It´s a tie!';
		}
	}
}
//playsRock();


const game = () => {
	for(var i = 0; i < 6; i++) {
		roundsTotal += 1;
		round(playerSelection, computerSelection);
		console.log('roundsTotal: ', roundsTotal);
		console.log('puntajePlayer:', puntajePlayer)
		console.log('puntajeAi: ', puntajeAi)
	}
}

game();