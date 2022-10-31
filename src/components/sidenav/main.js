import React from "react";
import styles from "./sidenav.module.css";
import $ from 'jquery';
class SideNav extends React.Component {
    constructor(props) {
        super(props);

        const { darkModeBG, lightModeBG} = props;
        this.state = {
            lightModeBG: !(lightModeBG === '' || lightModeBG === undefined) ? lightModeBG : "linear-gradient(135deg, #fefefe, #fff)",
            darkModeBG: !(darkModeBG === '' || darkModeBG === undefined) ? darkModeBG : "linear-gradient(135deg, #202020, #353535)",
            bg: ''
        };

        this.darkModeUpdate = this.darkModeUpdate.bind(this);
    }

    darkModeUpdate() {
        if ($('#darkMode').prop('checked')) {
            this.setState({ bg: this.state.darkModeBG })
        } else {
            this.setState({ bg: this.state.lightModeBG })
        }
    }

    componentDidMount() {
        if (localStorage.getItem('darkMode') === '1') {
            this.setState({ bg: this.state.darkModeBG })
        } else {
            this.setState({ bg: this.state.lightModeBG })
        }
    }

    render() {

        $(() => {
            $('#darkMode').on('change', () => {
                this.darkModeUpdate();
            });
        });

        return (
            <div className={ styles.container }>
                <div id="sidenav" style={{ background: this.state.bg }}>
                    { this.props.children }            
                </div>
            </div>
        );
    }
    
}

class SideNavBth extends React.Component {
    constructor(props) {
        super(props);

        const { main, className, tooltip } = props;
        this.state = {
            main: main,
            className: className,
            tooltip: tooltip
        };
    }

    render() {

        function tooltip(tooltip) {
            if (!(tooltip === undefined || tooltip === "")) {
                return (
                    <span className={ styles.tooltip } >{ tooltip }</span>
                ); 
            }
            return ("");
        }

        return (
            <div className={ styles.btn + " " + this.state.className }>
                { tooltip(this.state.tooltip) }
                { this.props.children }
                { this.state.main ? (<hr style={{ width: '35px', backgroundColor: '#999', height: '1px', border: '0' }} />) : "" }
            </div>
        );
    }
}

export { SideNav, SideNavBth };