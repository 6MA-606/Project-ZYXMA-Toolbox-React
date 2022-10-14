import React from "react";
import styles from "./shortcutGroup.module.css";

class ShortcutGroup extends React.Component {
    constructor(props) {
        super(props);

        const { type, amount } = props;

        this.state = {
            type: type,
            amount: amount
        };
    }

    render() {
        const className = this.state.type === "wide" ? styles.wide : styles.icon;
        const childArray = (this.props.children).length
        const childAmount = childArray !== undefined ? childArray : 1;
        let row0Width, row1Width, row2Width;

        if (this.state.type === "icon") {
            if (childAmount < 3) {
                row0Width = {
                    width: (childAmount * 70) + (( childAmount !== 1 ? childAmount : 0 ) * 5) + "px"
                };
            }
            if (childAmount < 6) {
                row1Width = {
                    width: ((childAmount - 3) * 70) + (( (childAmount - 3) !== 1 ? (childAmount - 3) : 0 ) * 5) + "px"
                };
            }
            if (childAmount < 9) {
                row2Width = {
                    width: ((childAmount - 6) * 70) + (( (childAmount - 6) !== 1 ? (childAmount - 6) : 0 ) * 5) + "px"
                };
            }
        }

        const contentWide = this.state.type === "wide" ? this.props.children : '';
        const contentIcon = this.state.type === "icon" ? [
            (<div style={ row0Width }>{ this.props.children[0] === undefined ? this.props.children : this.props.children[0]}
            { this.props.children[1] }{ this.props.children[2] }</div>),
            (<div style={ row1Width }>{ this.props.children[3] }{ this.props.children[4] }{ this.props.children[5] }</div>),
            (<div style={ row2Width }>{ this.props.children[6] }{ this.props.children[7] }{ this.props.children[8] }</div>)
        ] : ['','',''];

        // function ปัดเลข .5++ ปัดขึ้น ที่เหลือปัดลง // "ไม่ใช้ละ"
        // function roundNumber(num) {
        //     let str = num.toString();
        //     let result;
        //     if (parseInt(str[2]) >= 5) {
        //         result = Math.ceil(num);
        //     } else {
        //         result = Math.floor(num);
        //     }
        //     return result;
        // }

        function style(type, n) {
            /*let x = (n / 3).toPrecision(3); .toPrecision(0-100) -> ใช้ปัดเลข(ปัดขึ้น!)ให้ได้ตำแหน่งทศนิยมตามที่เราใส่ไปใน ()*/
            
            n = (type === "icon") ? (Math.ceil(n / 3)) : n; //ถ้าเป็น type icon จะหารแล้วปัดเลขเพื่อหาว่ามีกี่แถว
            if (n < 3) {
                let style = {
                    height: (n * 70) + (( n !== 1 ? n : 0 ) * (type === "wide" ? 5 : 10)) + "px" //ปรับความสูงตามแถว
                };
                return style;
            }
            return {};
        }

        return (
            <div className={ className } style={ style(this.state.type, childAmount) }>
                { contentWide }
                { contentIcon[0] }
                { contentIcon[1] }
                { contentIcon[2] }
            </div>
        );
    }
}

export default ShortcutGroup;