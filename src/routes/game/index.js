import { h, Component } from 'preact';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ControlButton from '../../components/ControlButton';
import style from './style';
import Exit from '../../assets/icons/exit.svg';
import Pause from '../../assets/icons/pause.svg';
import SoundOn from '../../assets/icons/sound-on.svg';
import { createGame } from '../../lib/game';

class Game extends Component {

	// gets called when this route is navigated to
	componentDidMount() {
		createGame();
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	// update the current time
	updateTime = () => {
		this.setState({ time: Date.now() });
	};

	increment = () => {
		this.setState({ count: this.state.count+1 });
	};

	// Note: `user` comes from the URL, courtesy of our router
	render() {
		return (
			<div class={style.profile}>
				<Input />
				<Button clickHandler={console.log('button clicked!!!')} buttonText="Submeter"/>
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
