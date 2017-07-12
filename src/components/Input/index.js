import React, { Component } from 'react';
import style from './style.less';


class Input extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<input
				type="tel"
				class={style.numberInput}
				maxlength="2"
				onChange={e => this.props.onChange(e)}
			/>
		);
	}
}

export default Input;
