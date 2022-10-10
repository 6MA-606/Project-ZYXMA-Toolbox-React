import React from "react";
import shortcut from './shortcut.module.css';

class Shortcut extends React.Component {
    constructor(props) {
        super(props);
        const { thumbnail, bgcolor, color, labelAlign, href, thumbnailInvert} = props;

        this.state = {
            thumbnail: thumbnail,
            bgcolor: bgcolor,
            color: color,
            align: labelAlign,
            href: href,
            thumbnailInvert: thumbnailInvert
        }

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        window.open( this.state.href, '_blank');
    }

    render() {
        // console.log(this.state.thumbnail);
        let invert = this.state.thumbnailInvert ? 1 : 0;

        return (
            <div className={ shortcut.container } onClick={ this.onClick } style={{ backgroundColor: this.state.bgcolor, display: 'flex', alignItems: 'center'}}>
                <img src={ this.state.thumbnail } height="70px" weight="auto" alt="thumbnail missing" style={{ flex: '70px', filter: 'invert(' + invert + ')' }}/>
                <div style={{ color: this.state.color, display: 'flex', justifyContent: this.state.align }}>
                    { this.props.children }
                </div>
            </div>
        );
    }
}

export default Shortcut;