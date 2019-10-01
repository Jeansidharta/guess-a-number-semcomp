import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/home/home";
import Game from "./pages/game/game";
import End from "./pages/end/end";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function App(){
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/home" component={Home}/>
				<Route path="/game/:id" component={Game}/>
				<Route path="/end/:id" component={End}/>
				<Redirect to="/home"/>
			</Switch>
		</BrowserRouter>
	);
}

ReactDOM.render(<App/>, document.getElementById("root"));