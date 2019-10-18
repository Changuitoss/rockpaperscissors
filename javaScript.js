const posibilidades = ['rock', 'scissors', 'paper', 'rock', 'scissors'];  // ordenadas de forma que siempre [i] le gana a [i + 1]

var computerSelection;
var playerSelection;

var puntajePlayer = 0;
var puntajeAi = 0;
var empate = 0;
var roundsTotal = 0;



const game = () => {
	for(var i = 0; i < 5; i++) {  // se juegan 5 rounds
		roundsTotal += 1;
		plays(playerSelection, computerSelection);
		console.log('Round: ', roundsTotal);
		console.log('Tu puntaje:', puntajePlayer)
		console.log('PC puntaje: ', puntajeAi)
		console.log('---------------------------------');
	}
}

const computerPlay = () => {
	var azar = Math.floor(Math.random() * 3)
	return posibilidades[azar];
}


const plays = (playerSelection, computerSelection) => {
	for(var i = 0; i < 3; i++) {
		playerSelection = prompt('Elegi: Rock, Paper o Scissors').toLowerCase(); // TODO: no permitir que se ingrese cualquier cosa-.
		console.log('Tu eleccion: ', playerSelection);

		var computerSelection = computerPlay();
		console.log('PC eleccion: ', computerSelection);

		if (playerSelection == posibilidades[i] || playerSelection == posibilidades[i + 1] || playerSelection == posibilidades[i + 2]) {
			if (computerSelection == posibilidades[playerSelection.indexOf() + 1]) {  // chequea que la eleccion de la compu sea el proximo en posibilidades[]
				return puntajePlayer += 1;
			} else if(computerSelection == posibilidades[playerSelection.indexOf() + 2]) {  // chequea que la eleccion de la compu sea el [i + 2] en posibilidades[]
				return puntajeAi =+ 1;
			} else {
			return empate += 1;
			}
		}
	}
}



game();