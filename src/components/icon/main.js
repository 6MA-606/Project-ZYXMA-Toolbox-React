import React from "react";
import $ from 'jquery';

export class Icon extends React.Component {
    constructor(props) {
        super(props);

        const { variant, size, lightModeColor, darkModeColor } = props;

        this.state = {
            variant: !(variant === '' || variant === undefined) ? variant : "",
            size: !(size === '' || size === undefined) ? size : "25",
            lightModeColor: !(lightModeColor === '' || lightModeColor === undefined) ? lightModeColor : "#000",
            darkModeColor: !(darkModeColor === '' || darkModeColor === undefined) ? darkModeColor : "#fff",
            color: ''
        }

        this.darkModeUpdate = this.darkModeUpdate.bind(this);
    }

    darkModeUpdate() {
        if ($('#darkMode').prop('checked')) {
            this.setState({ color: this.state.darkModeColor })
        } else {
            this.setState({ color: this.state.lightModeColor })
        }
    }

    componentDidMount() {
        console.log(localStorage.getItem('darkMode'));
        if (localStorage.getItem('darkMode') === '1') {
            this.setState({ color: this.state.darkModeColor })
        } else {
            this.setState({ color: this.state.lightModeColor })
        }
    }

    render() {

        $(() => {
            $('#darkMode').on('change', () => {
                this.darkModeUpdate();
            });
        });

        switch (this.state.variant) {
            case "house":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width={this.state.size} height={this.state.size} fill={this.state.color} className="bi bi-house" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                        <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                    </svg>
                );
            case "textarea":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width={this.state.size} height={this.state.size} fill={this.state.color} className="bi bi-textarea-t" viewBox="0 0 16 16">
                        <path d="M1.5 2.5A1.5 1.5 0 0 1 3 1h10a1.5 1.5 0 0 1 1.5 1.5v3.563a2 2 0 0 1 0 3.874V13.5A1.5 1.5 0 0 1 13 15H3a1.5 1.5 0 0 1-1.5-1.5V9.937a2 2 0 0 1 0-3.874V2.5zm1 3.563a2 2 0 0 1 0 3.874V13.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V9.937a2 2 0 0 1 0-3.874V2.5A.5.5 0 0 0 13 2H3a.5.5 0 0 0-.5.5v3.563zM2 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        <path d="M11.434 4H4.566L4.5 5.994h.386c.21-1.252.612-1.446 2.173-1.495l.343-.011v6.343c0 .537-.116.665-1.049.748V12h3.294v-.421c-.938-.083-1.054-.21-1.054-.748V4.488l.348.01c1.56.05 1.963.244 2.173 1.496h.386L11.434 4z"/>
                    </svg>
                );
            case "qr-code":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width={this.state.size} height={this.state.size} fill={this.state.color} className="bi bi-qr-code" viewBox="0 0 16 16">
                        <path d="M2 2h2v2H2V2Z" />
                        <path d="M6 0v6H0V0h6ZM5 1H1v4h4V1ZM4 12H2v2h2v-2Z" />
                        <path d="M6 10v6H0v-6h6Zm-5 1v4h4v-4H1Zm11-9h2v2h-2V2Z" />
                        <path d="M10 0v6h6V0h-6Zm5 1v4h-4V1h4ZM8 1V0h1v2H8v2H7V1h1Zm0 5V4h1v2H8ZM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8H6Zm0 0v1H2V8H1v1H0V7h3v1h3Zm10 1h-1V7h1v2Zm-1 0h-1v2h2v-1h-1V9Zm-4 0h2v1h-1v1h-1V9Zm2 3v-1h-1v1h-1v1H9v1h3v-2h1Zm0 0h3v1h-2v1h-1v-2Zm-4-1v1h1v-2H7v1h2Z" />
                        <path d="M7 12h1v3h4v1H7v-4Zm9 2v2h-3v-1h2v-1h1Z" />
                    </svg>
                );
            case "joystick":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width={this.state.size} height={this.state.size} fill={this.state.color} className="bi bi-joystick" viewBox="0 0 16 16">
                        <path d="M10 2a2 2 0 0 1-1.5 1.937v5.087c.863.083 1.5.377 1.5.726 0 .414-.895.75-2 .75s-2-.336-2-.75c0-.35.637-.643 1.5-.726V3.937A2 2 0 1 1 10 2z"/>
                        <path d="M0 9.665v1.717a1 1 0 0 0 .553.894l6.553 3.277a2 2 0 0 0 1.788 0l6.553-3.277a1 1 0 0 0 .553-.894V9.665c0-.1-.06-.19-.152-.23L9.5 6.715v.993l5.227 2.178a.125.125 0 0 1 .001.23l-5.94 2.546a2 2 0 0 1-1.576 0l-5.94-2.546a.125.125 0 0 1 .001-.23L6.5 7.708l-.013-.988L.152 9.435a.25.25 0 0 0-.152.23z"/>
                    </svg>
                );
            default:
                return console.log("error");
        }
    }
}