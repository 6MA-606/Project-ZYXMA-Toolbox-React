import React from "react";
import { MoonInfo, MoonPhase } from "../../../prototype/moonphase/main";
import styles from "./moonToday.module.css";

class MoonToday extends React.Component {
    render() {
        return (
            <div className={ styles.container }>
                <div className={ styles.inner }>
                    <span className={ styles.header }>
                        <b>Your moon today</b>
                    </span>
                    <div className={ styles.content }>
                        <MoonPhase />
                    </div>
                    <span className={ styles.subContent }>
                        <MoonInfo luminated />% illuminated
                    </span>
                </div>
                <div className={ styles.body }>
                    Last update { (Date().split(' '))[4] }
                </div>
            </div>
        );
    }
}

export default MoonToday;