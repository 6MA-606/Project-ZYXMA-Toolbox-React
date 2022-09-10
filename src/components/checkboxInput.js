import React from "react";
import styles from './input.module.css';

class ChackboxInput extends React.Component {
    constructor(props) {
        super(props);
        const { label, id } = props;

        this.state = {
            label: label,
            id: id
        };
    }

    render() {
        return (
            <span>
                <label className={ styles.label } htmlFor={ this.state.id }>{ this.state.label }</label>
                <input className={ styles.input } id={ this.state.id } type="checkbox" />
            </span>
        );
    }
}

export default ChackboxInput;