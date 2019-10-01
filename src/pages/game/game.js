import React from "react";

export default function Game({match, history}){
	let [floor, setFloor] = React.useState(10);
	let [ceil, setCeil] = React.useState(100);

	const [guessNumber, setGuessNumber] = React.useState(
		Math.floor(Math.random() * (ceil - floor) + floor)
	);
	const number = parseInt(match.params.number);

	function clickBigger(){
		if(guessNumber > number){
			alert("Eu sei que o número é menor :)");
			return;
		}
		setFloor(guessNumber + 1);
		let newFloor = guessNumber + 1;
		const newNumber = Math.floor(Math.random() * (ceil - newFloor) + newFloor);
		if(newNumber === number){
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
		let newCeil = guessNumber - 1;
		const newNumber = Math.floor(Math.random() * (newCeil - floor) + floor);
		if(newNumber === number){
			history.push("/end/" + number);
			return;
		}
		setGuessNumber(newNumber);
	}

	return (
		<main>
			<h1>Eu acho que o número é {guessNumber}. Ele é maior ou menor que {guessNumber}?</h1>
			<button onClick={clickBigger}>Maior</button>
			<button onClick={clickSmaller}>Menor</button>
		</main>
	);
}