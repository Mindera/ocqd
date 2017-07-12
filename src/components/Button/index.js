import React, { Component } from 'react';
import style from './style.less';


class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button type="button"
                    class={style.submitButton}
                    onClick={this.props.clickHandler}>
                {this.props.buttonText}
            </button>
        );
    }
}

export default Button;