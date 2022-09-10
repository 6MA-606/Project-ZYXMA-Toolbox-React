import React from "react";
import styles from "./input.module.css";

export class MenuInput extends React.Component {
    constructor(props) {
        super(props);
        const { label, id, toggleButton } = props;

        this.state = {
            label: label,
            id: id,
            toggleButton: toggleButton,
            disabled: false,
            display: "none"
        };

        this.change = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ disabled: !e.target.checked });
    }  

    render() {
        this.state.display = this.state.toggleButton ? "inline" : "none"
        return (
            <div>
                <label className={ styles.label } htmlFor={ this.state.id }>{ this.state.label }</label>
                <select id={ this.state.id } className={ styles.select } disabled={ this.state.disabled }>
                    { this.props.children }
                </select>
                &nbsp;
                <input className={ styles.input } type="checkbox" onChange={ this.change } style={{display: this.state.display }} defaultChecked />
            </div>
        );
    }
}

export class MenuList extends React.Component {
    constructor(props) {
        super(props);
        const { label, value } = props;

        this.state = { label: label, value: value };
    }

    render() {
        return (
            <option value={ this.state.value }>{ this.state.label }</option>
        );
    }
}