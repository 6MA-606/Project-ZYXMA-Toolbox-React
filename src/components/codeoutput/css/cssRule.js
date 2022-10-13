import React from "react";

class CSSrule extends React.Component {
    constructor(props) {
        super(props);
        const { selector } = props;

        this.state = {
            selector: selector
        };
    }

    render() {
        return (
            <span>
                <span style={{ color: '#ffbf00' }}>{ this.state.selector } &#123;<br /></span>
                    { this.props.children }
                <span style={{ color: '#ffbf00' }}>&#125;</span>
            </span>
        );
    }
}

export default CSSrule;