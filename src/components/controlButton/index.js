import React, { Component } from 'react';
import style from './style.less';


class ControlButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button type="button"
                    class={style.controlButton}
                    onClick={this.props.clickHandler}>
                {this.props.children}
            </button>
        );
    }
}

export default ControlButton;