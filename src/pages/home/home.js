import React from "react";

export default function Home({history}){
	const inputRef = React.useRef();

	function submit(e){
		e.preventDefault();
		const input = inputRef.current.value || 0;
		if(input < 10){
			alert("Number too small!");
			return;
		} else if(input > 100){
			alert("Number too big!");
			return;
		}
		history.push("/game/" + input);
	}

	return (
		<main>
			<h1>Welcome!</h1>
			<form onSubmit={submit}>
				<label>Give me a number between 10 and 100</label>
				<input ref={inputRef} type="number"/>
				<button type="submit">Send</button>
			</form>
		</main>
	);
}