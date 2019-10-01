import React from "react";

let tries = 0;
export default function Game({match, history}){
	let [floor, setFloor] = React.useState(10);
	let [ceil, setCeil] = React.useState(100);
	const [guessNumber, setGuessNumber] = React.useState(
		Math.floor(Math.random() * (ceil - floor) + floor)
	);
	const number = match.params.id;

	function clickBigger(){
		if(guessNumber > number){
			alert("Eu sei que o número é menor :)");
			return;
		}
		setFloor(guessNumber + 1);
		floor = guessNumber + 1;
		const newNumber = Math.floor(Math.random() * (ceil - floor) + floor);
		if(newNumber == number){
			history.push("/end/" + number);
			return;
		}
		setGuessNumber(newNumber);
	}

	function clickSmaller(){
		if(guessNumber < number){
			alert("Eu sei que o número é maior :)");
			return;
		}
		setCeil(guessNumber - 1);
		ceil = guessNumber - 1;
		const newNumber = Math.floor(Math.random() * (ceil - floor) + floor);
		if(newNumber == number){
			history.push("/end/" + number);
			return;
		}
		setGuessNumber(newNumber);
	}

	return (
		<main>
			<h1>Game</h1>
			<p>
				I just guessed {guessNumber}. Is your number bigger or smaller?
			</p>
			<button onClick={clickBigger}>Bigger</button>
			<button onClick={clickSmaller}>Smaller</button>
		</main>
	);
}