import React from "react";
import styles from './input.module.css';

class TextInput extends React.Component {
    constructor(props) {
        super(props);
        const { label, id, placeholder, value } = props;

        this.state = { label: label, id: id, placeholder: placeholder, value: value };
        this.change = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <div>
                <label htmlFor={ this.state.id }>{ this.state.label }</label>
                <input id={ this.state.id } className={styles.input} type="text" placeholder={ this.state.placeholder } onChange={ this.change } value={ this.state.value }/>
            </div>
        );
    }
}

export default TextInput;