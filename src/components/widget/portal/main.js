import React from "react";
import styles from "./portal.module.css";

class Portal extends React.Component {
    constructor(props) {
        super(props);

        const { id, tooltip, bg, bgHover, goto } = props;

        this.state = {
            id: id,
            tooltip: tooltip,
            bg: bg,
            bgHover: bgHover,
            styles: { background: bg },
            destination: goto,
            content: this.props.children
        }

        this.hover = this.mouseOver.bind(this);
        this.leave = this.mouseLeave.bind(this);
        this.click = this.click.bind(this);

    }

    mouseOver() {
        this.setState({
            styles: {
                background: this.state.bgHover + " no-repeat center",
                backgroundSize: "100% 100%",
                borderRadius: '15px'
            },
            content: ''
        });
    }

    mouseLeave() {
        this.setState({
            styles: {
                background: this.state.bg
            },
            content: this.props.children
        });
    }

    click() {
        window.location = this.state.destination;
    }

    render() {

        function tooltip(tooltip) {
            if (tooltip !== undefined && tooltip !== '') {
                return (<span className={ styles.tooltiptext }>{ tooltip }</span>);
            }
            return '';
        }

        return (
            <div className={ styles.box } onMouseLeave={ this.leave }  onMouseOver={ this.hover } onClick={ this.click }>
                { tooltip(this.state.tooltip) }
                <div id={ this.state.id } className={ styles.container } style={ this.state.styles }>
                    { this.state.content }
                </div>
            </div>
        );
    }
}

export default Portal;