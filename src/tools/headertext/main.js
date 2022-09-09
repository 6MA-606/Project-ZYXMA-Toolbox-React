import './style.css';
import './script';

function HeaderText() {
    return (
        <div id="HeaderText">
            <span className="content-header">Header Text Generator</span>
            <hr style={{border: "1px solid #aaaaaa", margin: "5px 5vw px 1vw"}} />
            <div className="content-feature">
                <div className="flex_1">
                    <div className="tool-box">
                        <input type="text" id="text-input" placeholder="Your text here" defaultValue="Your text here" />
                        <br />
                        <br />
                        <label htmlFor="font-size-input">Font-size: </label>
                        <input type="range" min="0" max="125" defaultValue="50" id="font-size-input" />
                        <span id="font-size">50px</span>
                        <br />
                        <label htmlFor="font-families">Font-family:</label>
                        <select title="test" name="font-families" id="font-families-list">
                            <option defaultValue="Arial, Helvetica, sans-serif">Arial</option>
                            <option defaultValue="'Courier New', Courier, monospace">Courier New</option>
                            <option defaultValue="'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">Franklin Gothic Medium</option>
                            <option defaultValue="'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif">Gill Sans</option>
                            <option defaultValue="'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif">Lucida Sans</option>
                            <option defaultValue="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif">Segoe UI</option>
                        </select>
                        <input type="checkbox" id="font-family-checkbox" checked />
                        <br />
                        <label htmlFor="text-color-input">Color: </label>
                        <span className="text-color-ui">
                            <input type="text" id="text-color-input" defaultValue="#000000" />
                            <label htmlFor="text-color-picker">
                                <span id="custom-color-picker"></span>
                            </label>
                            <input type="color" id="text-color-picker" defaultValue="#000000" />
                        </span>
                        <br />
                        <label htmlFor="text-shadow-checkbox">Shadow: </label><input type="checkbox" id="text-shadow-checkbox" unchecked />
                        <blockquote id="text-shadow-ui" style={{display: "none"}}>
                            <label htmlFor="hs-input">x distance: </label><input id="hs-input" type="range" min="-50" max="50" defaultValue="0" />
                            <span id="hs-defaultValue">0px</span>
                            <br />
                            <label htmlFor="vs-input">y distance: </label><input id="vs-input" type="range" min="-50" max="50" defaultValue="0" />
                            <span id="vs-defaultValue">0px</span>
                            <br />
                            <label htmlFor="blur-input">blur radius: </label><input id="blur-input" type="range" min="0" max="20" defaultValue="0" />
                            <span id="blur-defaultValue">0px</span>
                            <br />
                            <label htmlFor="opacity-input">opacity: </label><input id="opacity-input" type="range" min="0" max="100" defaultValue="100" />
                            <span id="opacity-defaultValue">100%</span>
                            <br />
                            <label htmlFor="shadow-color-input">Shadow color: </label>
                            <input id="shadow-color-input" type="text" defaultValue="#000000" />
                            <label htmlFor="shadow-color-picker">
                                <span id="custom-shadow-color-picker"></span>
                            </label>
                            <input type="color" id="shadow-color-picker" defaultValue="#000000" />
                        </blockquote>
                        <label htmlFor="text-decoration-checkbox">Decoration: </label><input type="checkbox" id="text-decoration-checkbox" unchecked />
                            <span id="text-decoration-input" style={{display: "none", position: "absolute"}}>
                                <input type="checkbox" id="overline-checkbox" className="decoration-list" unchecked />
                                <label htmlFor="overline-checkbox">overline&nbsp;</label>
                                <input type="checkbox" id="line-through" className="decoration-list" unchecked />
                                <label htmlFor="line-through">line-through&nbsp;</label>
                                <br />
                                <input type="checkbox" id="underline-checkbox" className="decoration-list" unchecked />
                                <label htmlFor="underline-checkbox">underline&nbsp;</label>
                            </span>
                            <br />
                            <br />
                    </div>
                    <br />
                    <div className="code-terminal">
                        <div className="css-terminal">
                            <div className="terminal-label" style={{textAlign: "left"}}>
                                <span>CSS</span>
                                {/* <button onclick="cssCopy()">COPY</button> */}
                            </div>
                            <div id="css-output">
                                <code id="css-code">
                                    <span>.header-text &#123;<br /></span>
                                    <span id="css-font-size" style={{marginLeft: "2em"}}>font-size: 50px;</span><br />
                                    <span id="css-font-family" style={{marginLeft: "2em"}}>font-family: Arial, Helvetica, sans-serif;</span><br id="css-fontFamily-br" />
                                    <span id="css-color" style={{marginLeft: "2em"}}>color: #000000;</span><br />
                                    <span id="css-text-shadow" style={{marginLeft: "2em", display: "none"}}></span><br id="css-shadow-br" style={{display: "none"}} />
                                    <span id="css-text-decoration" style={{marginLeft: "2em"}}>text-decoration: none;</span><br />
                                    <span>&#125;</span>
                                </code>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className="html-terminal">
                            <div className="terminal-label" style={{textAlign: "left"}}>
                                <span>HTML</span>
                            </div>
                            <div id="html-output">
                                <code>
                                    <span id="html-span">&lt;span className="header-text"&gt;Your text here&lt;/span&gt;</span>
                                </code>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="preview flex_2" style={{overflow: "hidden", backgroundColor: "#dddddd"}}>
                    <span className="preview-label">Preview</span>
                    <input id="preview-bg" type="color" style={{transhtmlForm: "translate(22px, 8px)"}} defaultValue="#ffffff" />
                    <label htmlFor="preview-bg">
                        <span id="custom-preview-bg" style={{backgroundColor: "#ffffff", transhtmlForm: "translate(0px, 8px)"}}></span>
                    </label>
                    <div id="preview-box" style={{backgroundColor: "white", width: "100%", height: "100%"}}>
                        <span style={{fontSize: "50px"}} id="text">Your text here</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderText;