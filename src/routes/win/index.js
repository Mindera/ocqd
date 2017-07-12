import { h, Component } from 'preact';
import style from './style';
import logo from '../../assets/logo.svg';
import stars from '../../assets/stars.svg';
import cup from '../../assets/cup.svg';


const Win = ({ time }) => (
	<div class={style.win}>
		<img src={logo} class={style.logo} />
		<img src={stars} class={style.stars} />
		<img src={cup} class={style.cup} />


		<div class={style.textContainer}>
			<h1>Boa!!!!</h1>
			<h1>
						Adivinhaste  em {time || '00:00'}
			</h1>
		</div>
	</div>
);

export default Win;
