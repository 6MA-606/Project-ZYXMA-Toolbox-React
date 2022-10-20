import React from "react";
import styles from "./sidenav.module.css";

class SideNav extends React.Component {
    constructor(props) {
        super(props);

        const {} = props;
        this.state = {};
    }

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

        const { main } = props;
        this.state = {
            main: main
        };
    }

    render() {

        if (this.state.main) {
            return (
                <div className={ styles.btn } style={{ marginTop: "20px", marginBottom: "10px" }}>
                    { this.props.children }
                    <hr style={{ width: '35px' }} />
                </div>
            );
        } else if (!this.state.main) {
            return (
                <div className={ styles.btn } style={{ margin: "10px 0" }}>
                    { this.props.children }
                </div>
            );
        }

        
    }
}

export { SideNav, SideNavBth };