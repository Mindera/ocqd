import React, { Component } from 'react';
import style from './style.less';


class Input extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        console.log('input changed');
    }

    render() {
        return (
            <input
                type="tel"
                class={style.numberInput}
                maxlength="2"
                onChange={e => this.onChange(e)}
            />
        );
    }
}

export default Input;