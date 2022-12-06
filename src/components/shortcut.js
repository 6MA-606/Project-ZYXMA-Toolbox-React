import React, { useState } from "react";
import shortcut from './shortcut.module.css';
import { motion } from 'framer-motion';


const Shortcut = (props) => {

    const { thumbnail, bgcolor, color, labelAlign, href, thumbnailInvert, icon, bgimage, tooltip, internalThumbnail } = props;

    const [show, setShow] = useState(false);

    const handleClick = () => {
        window.open( href, '_blank');
    }

    let invert = thumbnailInvert ? 1 : 0;
    let styles = {
        backgroundColor: bgcolor,
        backgroundImage: bgimage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: icon ? '70px' : '300px',
        height: '70px'
    }

    const content = (
        <div style={{ color: color, display: 'flex', flex: '230px', justifyContent: labelAlign }}>
            { props.children }
        </div>
    );

    const tooltip_form = (tooltip) => {
        if (tooltip !== undefined && tooltip !== '') {
            return (
                <motion.span
                    className={ shortcut.tooltiptext }
                    animate={show ? { opacity: 1, y: "-120%" } : { opacity: 0, y: "0%" }}
                >
                    { tooltip }
                </motion.span>);
        }
        return '';
    }

    const thumbnail_form = (internalThumbnail) => {

        if (internalThumbnail) return props.children;

        return (
            <img
                src={ thumbnail }
                height="70px"
                weight="auto"
                alt="thumbnail missing"
                style={{ flex: '70px', filter: 'invert(' + invert + ')' }}
            />
        );
    }

    return (
        <div className={ shortcut.shortcut }>
            { tooltip_form(tooltip) }
            <motion.div
                className={ shortcut.item }
                whileHover={{ type: "spring", bounce: 5, scale: 1.2 }}
                whileTap={{ type: "spring", bounce: 5, scale: 0.8 }}
                onMouseEnter={() => {setShow(true)}}
                onMouseLeave={() => {setShow(false)}}
            >
                <div className={ shortcut.container } onClick={ handleClick } style={ styles }>
                    { thumbnail_form(internalThumbnail) }
                    { icon ? '' : content }
                </div>
            </motion.div>
        </div>
    );
}

export default Shortcut;