import { h, Component } from 'preact';
import style from './style';
import { Link } from 'preact-router/match';
import logo from '../../assets/logo.svg';

const Home = () => (
	<div class={style.home}>
		<img src={logo} alt="Logo" class={style.logo} />
		<ul class={style.menu}>
			<li>
				<Link
					activeClassName={style.active}
					href="/game"
				>
							Novo Jogo
				</Link>
			</li>
			<li>
				<Link
					activeClassName={style.active} href="/results"
				>
							Resultados
				</Link>
			</li>
			<li>
				<Link
					activeClassName={style.active} href="/options"
				>
							Opções
				</Link>
			</li>
		</ul>
	</div>
);

export default Home;
