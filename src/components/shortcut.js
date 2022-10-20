import React from "react";
import shortcut from './shortcut.module.css';

class Shortcut extends React.Component {
    constructor(props) {
        super(props);
        const { thumbnail, bgcolor, color, labelAlign, href, thumbnailInvert, icon, bgimage, tooltip } = props;

        this.state = {
            thumbnail: thumbnail,
            bgcolor: bgcolor,
            bgimage: bgimage,
            color: color,
            align: labelAlign,
            href: href,
            thumbnailInvert: thumbnailInvert,
            icon: icon,
            tooltip: tooltip
        }

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        window.open( this.state.href, '_blank');
    }

    render() {
        // console.log(this.state.thumbnail);
        let invert = this.state.thumbnailInvert ? 1 : 0;
        let styles = {
            backgroundColor: this.state.bgcolor,
            backgroundImage: this.state.bgimage,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: this.state.icon ? '70px' : '300px'
        }

        const content = (
            <div style={{ color: this.state.color, display: 'flex', flex: '230px', justifyContent: this.state.align }}>
                { this.props.children }
            </div>
        );


        function tooltip(tooltip) {
            if (tooltip !== undefined && tooltip !== '') {
                return (<span className={ shortcut.tooltiptext }>{ tooltip }</span>);
            }
            return '';
        }

        return (
            <div className={ shortcut.item }>
                { tooltip(this.state.tooltip) }
                <div className={ shortcut.container } onClick={ this.onClick } style={ styles }>
                    <img src={ this.state.thumbnail } height="70px" weight="auto" alt="thumbnail missing" style={{ flex: '70px', filter: 'invert(' + invert + ')' }}/>
                    { this.state.icon ? '' : content }
                </div>
            </div>
        );
    }
}

export default Shortcut;