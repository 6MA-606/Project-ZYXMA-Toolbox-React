import styles from './shortcutGrid.module.css';

const ShortcutGrid = (props) => {

    const { type } = props;

    const isDefined = (data) => {
        if (data !== undefined && data !== "") return true;
        return false;
    }

    let style = styles.icon;
    if (isDefined(type)) {
        if (type === "icon") style = styles.icon;
        if (type === "wide") style = styles.wide;
    }

    return (
        <div className={ `${style} ${styles.shortcutGrid}` }>
            { props.children }
        </div>
    );
}

export default ShortcutGrid;