import React from "react";
import styles from "./sidenav.module.css";

class SideNav extends React.Component {
    // constructor(props) {
    //     super(props);

    //     const {} = props;
    //     this.state = {};
    // }

    render() {
        return (
            <div className={ styles.container }>
                <div>
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