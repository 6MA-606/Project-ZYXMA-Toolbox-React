import React from "react";
import styles from "./input.module.css";

class RangeInput extends React.Component {
    constructor(props) {
        super(props);
        const { label, id, min, max, value, visibleValue} = props;

        this.state = { label: label, id: id, min: min, max: max, value: value, unit: visibleValue};
        this.change = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        let showValue =  this.state.unit != undefined ? this.state.value + this.state.unit : '';

        return (
            <div id={ this.state.id + 'Block'}>
                <label className={ styles.label } htmlFor={ this.state.id }>{ this.state.label }</label>
                <input id={ this.state.id } type="range" min={ this.state.min } max={ this.state.max } onChange={ this.change } value={ this.state.value } />
                <span className={ styles.label }> { showValue }</span>
            </div>
        );
    }
}

export default RangeInput;