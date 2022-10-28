import React from "react";
import styles from "./navButton.module.css";

class NavButton extends React.Component {
    constructor(props) {
        super(props);

        const { href } = props;

        this.state = {
            href: href
        }

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        window.location = this.state.href;
    }

    render() {
        return (
            <div className={ styles.container } onClick={ this.onClick }>
                <div>{ this.props.children }</div>
            </div>
        );
    }
}

export default NavButton;