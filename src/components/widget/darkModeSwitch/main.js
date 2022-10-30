import React from "react";
import styles from "./darkModeSwitch.module.css";
import $ from 'jquery';

export class DarkModeSwitch extends React.Component {
    constructor(props) {
        super(props)

        const { checked } = props;

        this.state = {
            toggle: 0,
            containerStyle: {
                backgroundColor: "rgb(255, 226, 183)"
            },
            switchStyle: {
                backgroundColor: "rgb(255, 200, 83)",
                transform: "translateX(0px)"
            },
            checked: checked
        }

        this.change = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ checked: e.target.checked });
    }
    
    render() {

        $(() => {
            $('#darkMode').on('change', () => {
                if ($('#darkMode').prop('checked')) {
                    this.setState({ containerStyle: { backgroundColor: "rgb(57, 53, 86)" }});
                    this.setState({ switchStyle: { backgroundColor: "rgb(100, 101, 162)", transform: "translateX(24.5px)" }});
                } else {
                    this.setState({ containerStyle: { backgroundColor: "rgb(255, 226, 183)" }});
                    this.setState({ switchStyle: { backgroundColor: "rgb(255, 200, 83)", transform: "translateX(0px)" }});
                }
            });
        });

        return(
            <div className={ styles.container } style={ this.state.containerStyle }>
                <label htmlFor="darkMode" className={ styles.switch } style={ this.state.switchStyle }></label>
                <input type="checkbox" name="" id="darkMode" style={{ display: "none" }} onChange={ this.change } />
            </div>
        );
    }
}