import React from "react";
import styles from "./darkModeSwitch.module.css";
import $ from 'jquery';

export class DarkModeSwitch extends React.Component {
    constructor(props) {
        super(props)

        const { checked } = props;

        this.state = {
            isOn: localStorage.getItem('darkMode'),
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

    componentDidMount(e) {
        if (this.state.isOn === '1') {
            $('#darkMode').prop('checked', true);
            this.setState({ containerStyle: { backgroundColor: "rgb(57, 53, 86)" }});
            this.setState({ switchStyle: { backgroundColor: "rgb(100, 101, 162)", transform: "translateX(24.5px)" }});
        } else {
            $('#darkMode').prop('checked', false);
            this.setState({ containerStyle: { backgroundColor: "rgb(255, 226, 183)" }});
            this.setState({ switchStyle: { backgroundColor: "rgb(255, 200, 83)", transform: "translateX(0px)" }});
        } 
    }   
    
    render() {

        $(() => {
            $('#darkMode').on('change', () => {
                if ($('#darkMode').prop('checked')) {
                    this.setState({ containerStyle: { backgroundColor: "rgb(57, 53, 86)" }});
                    this.setState({ switchStyle: { backgroundColor: "rgb(100, 101, 162)", transform: "translateX(24.5px)" }});
                    localStorage.setItem('darkMode', '1');
                    $( "#toolbox" ).css('background-color', '#27273a');
                    $( "#sidenav" ).css('background-image', 'linear-gradient(135deg, #43446a, #373755)');

                } else {
                    this.setState({ containerStyle: { backgroundColor: "rgb(255, 226, 183)" }});
                    this.setState({ switchStyle: { backgroundColor: "rgb(255, 200, 83)", transform: "translateX(0px)" }});
                    localStorage.setItem('darkMode', '0');
                    $( "#toolbox" ).css('background-color', '#fefefe');
                    $( "#sidenav" ).css('background-image', 'linear-gradient(135deg, #fefefe, #fff)');
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