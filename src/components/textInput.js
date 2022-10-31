import React from "react";
import styles from './input.module.css';
import $ from 'jquery';

class TextInput extends React.Component {
    constructor(props) {
        super(props);
        const { label, id, placeholder, value, darkStyle, lightStyle } = props;
        // darkStyle = !(darkStyle === undefined) ? darkStyle : ["#f8f8ff", "#252525", "#303030"];
        // lightStyle = !(lightStyle === undefined) ? lightStyle : ["#252525", "#f8f8ff", "#f0f0f5"];

        this.state = {
            label: label,
            id: id,
            placeholder: placeholder,
            value: value,
            // darkModeColor: !(darkModeColor === [] || darkModeColor === undefined) ? darkModeColor : ['#f8f8ff', '#252525'],
            // lightModeColor: !(lightModeColor === [] || lightModeColor === undefined) ? lightModeColor : ['#252525', '#f8f8ff'],
            darkStyle : {
                color: !(darkStyle[0] === undefined || darkStyle[0] === '') ? darkStyle[0] : '#f8f8ff',
                background: !(darkStyle[1] === undefined || darkStyle[1] === '') ? darkStyle[1] : '#252525',
                borderColor: !(darkStyle[2] === undefined || darkStyle[2] === '') ? darkStyle[2] : '#303030'
            },
            lightStyle : {
                color: !(lightStyle[0] === undefined || lightStyle[0] === '') ? lightStyle[0] : '#252525',
                background: !(lightStyle[1] === undefined || lightStyle[1] === '') ? lightStyle[1] : '#f8f8ff',
                borderColor: !(lightStyle[2] === undefined || lightStyle[2] === '') ? lightStyle[2] : '#f0f0f5'
            },
            style: ''
        };
        this.change = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    darkModeUpdate() {
        if ($('#darkMode').prop('checked')) {
            this.setState({ style: this.state.darkStyle })
        } else {
            this.setState({ style: this.state.darkStyle })
        }
    }

    componentDidMount() {
        if (localStorage.getItem('darkMode') === '1') {
            this.setState({ style: this.state.lightStyle })
        } else {
            this.setState({ style: this.state.lightStyle })
        }
    }

    render() {

        $(() => {
            $('#darkMode').on('change', () => {
                this.darkModeUpdate();
            });
        });

        const refValue = data => (data === undefined || data === '') ? '' : data;
        return (
            <div id={ this.state.id + 'Block'}>
                <label htmlFor={ this.state.id }>{ this.state.label }</label>
                <input id={ this.state.id } className={styles.input} style={this.state.style} type="text" placeholder={ this.state.placeholder } onChange={ this.change } value={ refValue(this.state.value) }/>
            </div>
        );
    }
}

export default TextInput;