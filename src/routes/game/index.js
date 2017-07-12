import { h, Component } from 'preact';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ControlButton from '../../components/ControlButton';
import style from './style';
import Exit from '../../assets/icons/exit.svg';
import Pause from '../../assets/icons/pause.svg';
import SoundOn from '../../assets/icons/sound-on.svg';

export default class Game extends Component {
	state = {
		time: Date.now(),
		count: 10
	};

	// gets called when this route is navigated to
	componentDidMount() {
		// start a timer for the clock:
		this.timer = setInterval(this.updateTime, 1000);
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
	render({ user }, { time, count }) {
		return (
			<div class={style.profile}>
				<h1>Profile: {user}</h1>
				<p>This is the user profile for a user named { user }.</p>

				<div>Current time: {new Date(time).toLocaleString()}</div>

				<p>
					<button onClick={this.increment}>Click Me</button>
					{' '}
					Clicked {count} times.
				</p>
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
