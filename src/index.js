import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/home/home";
import Game from "./pages/game/game";
import End from "./pages/end/end";
import { BrowserRouter, Route } from "react-router-dom";

import "./index.css";

function App(){
	return (
		<BrowserRouter>
			<Route path="/home" component={Home}/>
			<Route path="/game/:number" component={Game}/>
			<Route path="/end/:number" component={End}/>
		</BrowserRouter>
	);
}

ReactDOM.render(<App/>, document.getElementById("root"));