import React from "react";
import styles from "./input.module.css";

class RangeInput extends React.Component {
    constructor(props) {
        super(props);
        const { label, id, min, max, value, visibleValue, className, canType } = props;

        this.state = { 
            label: label,
            id: id,
            className: className,
            min: min,
            max: max,
            value: value,
            unit: visibleValue,
            canType: canType
        };
        this.change = this.handleChange.bind(this);
        this.input = this.handleInput.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleInput(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        let unit =  this.state.unit !== undefined ? this.state.unit : '';
        let input = (<input id={ this.state.id + 'Typing' } type="text" value={ this.state.value } className={ styles.rangeTyping } onChange={ this.input } />);

        return (
            <div id={ this.state.id + 'Block' }>
                <label className={ styles.label } htmlFor={ this.state.id }>{ this.state.label }</label>
                <input id={ this.state.id } type="range" min={ this.state.min } max={ this.state.max } onChange={ this.change } value={ this.state.value } />
                <span className={ styles.label }> 
                    { this.state.canType ? input : this.state.value }{ unit }
                </span>
            </div>
        );
    }
}

export default RangeInput;