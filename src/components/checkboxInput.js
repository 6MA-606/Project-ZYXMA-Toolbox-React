import React from "react";
import styles from './input.module.css';

class ChackboxInput extends React.Component {
    constructor(props) {
        super(props);
        const { label, labelDisplay, id, className, checked } = props;

        this.state = {
            label: label,
            labelDisplay: labelDisplay,
            id: id,
            className: className,
            checked: checked
        };
        this.change = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ checked: e.target.checked });
    }

    render() {
        let frontLabel, backLabel, checkAttr;
        let labelHTML = (<label className={ styles.label } htmlFor={ this.state.id }>{ this.state.label }</label>);

        frontLabel = this.state.labelDisplay == 'front' ? labelHTML : '';
        backLabel = this.state.labelDisplay == 'behind' ? labelHTML : '';
        checkAttr = (this.state.checked == true || this.state.checked == false) ? this.state.checked : false;

        const refClassName = text => (text == undefined || text == '') ? '' : ' ' + text;

        return (
            <span id={ this.state.id + 'Inline'}>
                { frontLabel }
                <input className={ styles.input + refClassName(this.state.className) } id={ this.state.id } type="checkbox" onChange={ this.change } checked={ checkAttr } />
                { backLabel }
            </span>
        );
    }
}

export default ChackboxInput;