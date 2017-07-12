import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Home from '../routes/home/index';
import Game from '../routes/game/index';
import Win from '../routes/win/index';

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Game path="/game" />
					<Win path="/win/:gameId" />
				</Router>
			</div>
		);
	}
}
