import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'
import ErrorBoundry from '../components/ErrorBoundry';


class App extends Component {
	constructor() {
		super ()
		this.state= {
			robots:[],
			searchfield:''
		}
}




componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response =>response.json())
		.then(users => {this.setState({ robots:users})});
		}



	onSearchChange = (event) => {
		this.setState({searchfield:event.target.value })
	}
		


	render() {
		const filteredRobots=this.state.robots.filter(robots=> {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		return(
			<div className='f2 tc'>
				<h1>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
				<ErrorBoundry>
				<CardList robots={filteredRobots}/>
				</ErrorBoundry>
				</Scroll>
		</div>
		);

	
	}
}

export default App;
