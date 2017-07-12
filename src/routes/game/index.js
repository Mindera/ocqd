import { h, Component } from 'preact';
import style from './style';
import { createGame } from '../../lib/game';

class Game extends Component {

	// gets called when this route is navigated to
	componentDidMount() {
		createGame();
	}

	render() {
		return (
			<div class={style.profile} />
		);
	}
}

export default Game;
