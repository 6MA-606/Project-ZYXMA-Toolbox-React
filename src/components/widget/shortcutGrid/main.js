import styles from './shortcutGrid.module.css';

const ShortcutGrid = (props) => {

    const { type, label } = props;

    const isDefined = (data) => {
        if (data !== undefined && data !== "") return true;
        return false;
    }

    let style = styles.icon;
    if (isDefined(type)) {
        if (type === "icon") style = styles.icon;
        if (type === "wide") style = styles.wide;
    }

    let headerLabel = null;
    if (isDefined(label)) {
        headerLabel = (<div className={ styles.headLabel }>{ label }</div>)
    }

    return (
        <div className={ styles.container }>
            { headerLabel }
            <div className={ `${style} ${styles.shortcutGrid}` }>
                { props.children }
            </div>
        </div>
    );
}

export default ShortcutGrid;