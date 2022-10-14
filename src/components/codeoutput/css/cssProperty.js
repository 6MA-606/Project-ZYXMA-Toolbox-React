import React from "react";

class CSSproperty extends React.Component {
    constructor(props) {
        super(props);
        const { id, name, defaultValue, hide } = props;

        this.state = {
            id: id,
            name: name,
            value: defaultValue.value,
            unit: defaultValue.unit,
            type: defaultValue.type,
            valueId: defaultValue.id,
            hide: hide
        };
    }

    render() {
        let n = (this.state.value).length;
        let value = [];
        let style;

        function setStyle(x, type) {
            if (type !== undefined && type[x] === "color") {
                style = {
                    backgroundColor: '#000000',
                    borderRadius: '5px',
                    padding: "0px 3px 0px 3px"
                };
            } else if(type === undefined || type[x] === undefined || type[x] === 'normal' || type[x] === '') {
                style = { color: '#ffbf00' };
            } else {
                style = { color: '#fff' };
            }
            return style;
        }

        for (let i=0;i<n;i++) {
            value[i] = (
                <span>
                    &emsp;
                    <span id={ this.state.valueId[i] } style={ setStyle(i, this.state.type) }>{ this.state.value[i] }</span>
                    <span style={{ color: '#f55' }}>{ this.state.unit !== undefined ? this.state.unit[i] : '' }</span>
                </span>
            );
        }

        return (
            <span id={ this.state.id} style={ this.state.hide ? { display: "none" } : {}}>
                <span style={{ marginLeft: "2em", color: '#ccc' }}>{ this.state.name }:</span>
                { value[0] }{ value[1] }{ value[2] }{ value[3] }
                <span style={{ color: '#ccc' }}>;</span>
                <br />
            </span>
        );
    }
}

export default CSSproperty;