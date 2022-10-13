import React from "react";

class CSSproperty extends React.Component {
    constructor(props) {
        super(props);
        const { id, name, defaultValue } = props;

        this.state = {
            id: id,
            name: name,
            value: defaultValue.value,
            unit: defaultValue.unit,
            type: defaultValue.type,
            valueId: defaultValue.id
        };
    }

    render() {
        let n = (this.state.value).length;
        let value = [];

        for (let i=0;i<n;i++) {
            value[i] = (
                <span>
                    &nbsp;
                    <span id={ this.state.valueId[i] } style={{ color: '#ffbf00' }}>{ this.state.value[i] }</span>
                    <span style={{ color: '#f55' }}>{ this.state.unit !==undefined ? this.state.unit[i] : '' }</span>
                </span>
            );
        }

        return (
            <span id={ this.state.id}>
                <span style={{ marginLeft: "2em", color: '#ccc' }}>{ this.state.name }:</span>
                { value[0] }{ value[1] }{ value[2] }{ value[3] }
                <span style={{ color: '#ccc' }}>;</span>
                <br />
            </span>
        );
    }
}

export default CSSproperty;