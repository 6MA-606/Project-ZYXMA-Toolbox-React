import React from "react";
import styles from './randomNumber.module.css';

class RandomNumber extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isSettingOpen: false,
            x: "280px",
            min: 0,
            max: 50
        };

        this.click = this.handleClick.bind(this);
        this.changeMin = this.changeMin.bind(this);
        this.changeMax = this.changeMax.bind(this);
    }

    handleClick() {
        if (!this.state.isSettingOpen) {
            this.setState({x: "280px", isSettingOpen: true});
        } else {
            this.setState({x: "0px", isSettingOpen: false});
        }
    }

    changeMin(e) {
        this.setState({min: e.target.value});
    }

    changeMax(e) {
        this.setState({max: e.target.value});
    }

    render() {
        return (
            <div className={ styles.container }>
                <div className={ styles.settings } style={{ transform: "translateX(" + this.state.x + ")"}}>
                    {/* <div className={ styles.settingBtn } onClick={ this.click }>
                        &lt;
                    </div> */}
                    <div className={ styles.settingBox }>
                        <div className={ styles.settingBtn } onClick={ this.click }>⚙️</div>
                        <div className={ styles.settingPanel }>
                            <div>
                                <label htmlFor="min">Min:</label><input id="min" type="number" value={ this.state.min } onChange={ this.changeMin } />
                            </div>
                            <div>
                                <label htmlFor="max">Max:</label><input id="max" type="number" value={ this.state.max } onChange={ this.changeMax } />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RandomNumber;