import React from "react";

class HTMLelement extends React.Component {
    constructor(props) {
        super(props);
        const { name, id, className, innerText } = props;

        this.state = {
            name: name,
            id: id,
            className: className,
            text: innerText
        };
    }

    render() {
        let innerText = this.state.text !== undefined ? (<span id={this.state.id + "Text"}>{ this.state.text }</span>) : '';

        return (
            <span id={ this.state.id }>
                <span style={{ color: '#cccccc' }}>&lt;</span><span style={{ color: '#ff5555' }}>{ this.state.name }</span>&emsp;<span style={{ color: '#ffbf00' }}>class</span><span style={{ color: '#00dddd' }}>=</span><span style={{ color: '#55dd55' }}>"{ this.state.className }"</span><span style={{ color: '#cccccc' }}>&gt;</span>
                { innerText }
                { this.props.children }
                <span style={{ color: '#cccccc' }}>&lt;</span><span style={{ color: '#cccccc' }}>/</span><span style={{ color: '#ff5555' }}>{ this.state.name }</span><span style={{ color: '#cccccc' }}>&gt;</span>     
            </span>
        );
    }
}

export default HTMLelement;