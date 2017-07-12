import { h, Component } from 'preact';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ControlButton from '../../components/ControlButton';
import style from './style';
import Exit from '../../assets/icons/exit.svg';
import Pause from '../../assets/icons/pause.svg';
import SoundOn from '../../assets/icons/sound-on.svg';
import { createGame, guess } from '../../lib/game';

class Game extends Component {

	state = {
		number: null,
		gameId: null
	}

	// gets called when this route is navigated to
	componentDidMount() {
		createGame().then(gameId => this.setState({ gameId }));
	}

	// update the current time
	setNumber = (e) => {
		this.setState({ number: e.target.value });
	};

	check = () => {
		guess(this.state.gameId, this.state.number).then(data => console.log(data));
	}

	// Note: `user` comes from the URL, courtesy of our router
	render() {
		return (
			<div class={style.profile}>
				<Input onChange={this.setNumber} />
				<Button clickHandler={this.check} buttonText="Submeter" />
				<div className={style.controlButtonsContainer} >
					<ControlButton clickHandler={console.log('play music')}>
						<img src={SoundOn} alt="Play" />
					</ControlButton>
					<ControlButton clickHandler={console.log('pause music')}>
						<img src={Pause} alt="Pause" />
					</ControlButton>
					<ControlButton clickHandler={console.log('Exit!')}>
						<img src={Exit} alt="Exit" />
					</ControlButton>
				</div>
			</div>
		);
	}
}

export default Game;
