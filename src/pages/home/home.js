import React from "react";

export default function Home({history}){
	const inputRef = React.useRef();

	function submit(e){
		e.preventDefault();
		const input = inputRef.current.value;
		history.push("/game/" + input);
	}

	return (
		<main>
			<h1>Bem Vindx!</h1>
			<form onSubmit={submit}>
				<label>Me dê um número entre 10 e 100</label>
				<input ref={inputRef} type="number" min="10" max="100" required />
				<button type="submit">Send</button>
			</form>
		</main>
	);
}