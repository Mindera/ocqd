import { h, Component } from 'preact';
import style from './style';
import logo from '../../assets/logo.svg';
import stars from '../../assets/stars.svg';
import cup from '../../assets/cup.svg';
import { getResults } from '../../lib/game';
import { Link } from 'preact-router';


class Win extends Component {

	state = {
		data: null
	}

	componentWillMount() {
		getResults(this.props.gameId).then((data) => this.setState({
			data
		}));
	}

	render() {
		return (
			<div class={style.win}>
				<img src={logo} class={style.logo} />
				<img src={stars} class={style.stars} />
				<img src={cup} class={style.cup} />


				<div class={style.textContainer}>
					<h1>Boa!!!!</h1>
					{this.state.data &&
					<h1>
								Adivinhaste  em {this.state.data.time || '00:00'}s
					</h1>}
					<Link
						activeClassName={style.active}
						href="/game"
					>
								Novo Jogo
					</Link>
				</div>
			</div>);
	}
}

export default Win;
