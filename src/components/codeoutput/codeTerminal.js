import React from "react";
import styles from "./codeTerminal.module.css";

class CodeTerminal extends React.Component {
    constructor(props) {
        super(props);
        const { label } = props;

        this.state = {
            label: label
        };
    }

    render() {
        return (
            <div className={ styles.terminal }>
                <div className={ styles.terminalLabel } style={{ textAlign: "left" }}>
                    <span>{ this.state.label }</span>
                 </div>
                 <div className={ styles.css_output } id="css-output">
                    <code id="css-code">
                        { this.props.children }
                    </code>
                </div>
            </div>
        );
    }
}

export default CodeTerminal;

                    // <div className={ headertext.css_terminal }>
                    //     <div className={ headertext.terminalLabel } style={{ textAlign: "left" }}>
                    //         <span>CSS</span>
                    //         {/* <button onclick="cssCopy()">COPY</button> */}
                    //     </div>
                    //     <div className={ headertext.css_output } id="css-output">
                    //         <code id="css-code">
                    //             <span style={{ color: '#ffbf00' }}>.header-text &#123;<br /></span>
                    //             <span style={{ marginLeft: "2em", color: '#cccccc' }}>font-size: </span>
                    //             <span id="css-font-size" style={{ color: '#ffbf00' }}>50</span>
                    //             <span style={{ color: '#ff5555' }}>px</span>
                    //             <span style={{ color: '#cccccc' }}>;</span>
                    //             <br />
                    //             <span id="css-font-family" style={{ marginLeft: "2em" }}>
                    //                 <span style={{ color: '#cccccc' }}>font-family: </span>
                    //                 <span id="css-font-family-value" style={{ color: '#ffbf00' }}>{ font }</span>
                    //                 <span style={{ color: '#cccccc' }}>;</span>
                    //             </span>
                    //             <br id="css-fontFamily-br" />
                    //             <span style={{ marginLeft: "2em", color: '#cccccc' }}>color: </span>
                    //             <span id="css-color" style={{ backgroundColor: '#000000', borderRadius: '5px', padding: "0px 3px 0px 3px"}}>#000000</span>
                    //             <span style={{ color: '#cccccc' }}>;</span>
                    //             <br />
                    //             <span id="css-letSpace-section" style={{ display: 'none' }}>
                    //                 <span style={{ marginLeft: "2em", color: '#cccccc' }}>letter-spacing: </span>
                    //                 <span id="css-letSpace" style={{ color: '#ffbf00' }}>0</span>
                    //                 <span style={{ color: '#ff5555' }}>px</span>
                    //                 <span style={{ color: '#cccccc' }}>;</span>
                    //                 <br />
                    //             </span>
                    //             <span id="css-text-shadow" style={{ marginLeft: "2em", display: "none" }} >
                    //                 <span style={{ color: '#cccccc' }}>text-shadow: </span>
                    //                 <span id="css-text-shadow-color" style={{ color: '#ffffff', backgroundColor: '#000000', borderRadius: '5px', padding: "0px 3px 0px 3px"}}>#000000ff</span>
                    //                 <span id="css-text-shadow-hs" style={{ color: '#ffbf00' }}> 0</span>
                    //                 <span style={{ color: '#ff5555' }}>px</span>
                    //                 <span id="css-text-shadow-vs" style={{ color: '#ffbf00' }}> 0</span>
                    //                 <span style={{ color: '#ff5555' }}>px</span>
                    //                 <span id="css-text-shadow-blur" style={{ color: '#ffbf00' }}> 0</span>
                    //                 <span style={{ color: '#ff5555' }}>px</span>
                    //                 <span style={{ color: '#cccccc' }}>;</span>
                    //             </span>
                    //             <br id="css-shadow-br" style={{ display: "none" }} />
                    //             <div id="css-decoration-section" style={{ display: 'none' }}>
                    //                 <span style={{ marginLeft: "2em", color: '#cccccc'}}>text-decoration: </span>
                    //                 <span id="css-text-decoration" style={{ color: '#ffbf00'}}> none</span>
                    //                 <span style={{ color: '#cccccc'}}>;</span>
                    //                 <br />
                    //             </div>
                    //             <span style={{ color: '#ffbf00' }}>&#125;</span>
                    //         </code>
                    //     </div>
                    // </div>