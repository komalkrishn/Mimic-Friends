import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./Robots";
import SearchBox from "./SearchBox";

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: robots,
			searchField: " "
		};
	}

	onSearchChange = event => {
		this.setState({ searchField: event.target.value });
		//console.log(filteredRobots);
	};
	render() {
		const filteredRobots = this.state.robots.filter(robots => {
			console.log(robots);
			return robots.name
				.toLowerCase()
				.includes(this.state.searchField.toLowerCase());
		});

		return (
			<div className="tc">
				<h1> RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<CardList robots={filteredRobots} />
			</div>
		);
	}
}

export default App;
