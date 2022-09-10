import './style.css';
import './script';
import $ from 'jquery';
import { useState } from 'react';
import TextInput from '../../components/textInput';
import RangeInput from '../../components/rangeInput';
import { MenuInput, MenuList } from '../../components/menuInput';
import ColorInput from '../../components/colorInput';
import ChackboxInput from '../../components/checkboxInput';

function HeaderText() {
    const [display,setDisplay] = useState('none');
    $(function() {
        $('text-shadow-checkbox').on('change', () => {
            setDisplay('block');
        });
    })
    return (
        <div id="HeaderText">
            <span className="content-header">Header Text Generator</span>
            <hr style={{ border: "1px solid #aaaaaa", margin: "5px 5vw px 1vw" }} />
            <div className="content-feature">
                <div className="flex_1">
                    <div className="tool-box">
                        <TextInput id="text-input" placeholder="Your text here" value="Your text here" />
                        <RangeInput label="Font-size: " id="font-size-input" min="0" max="125" value="50" visibleValue="px" />
                        <MenuInput label="Font Family: " id="font-families-list" toggleButton>
                            <MenuList label="Arial" value="Arial, Helvetica, sans-serif" />
                            <MenuList label="Courier New" value="'Courier New', Courier, monospace" />
                            <MenuList label="Franklin Gothic Medium" value="'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" />
                            <MenuList label="Gill Sans" value="'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" />
                            <MenuList label="Lucida Sans" value="'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif" />
                            <MenuList label="Segoe UI" value="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" />
                        </MenuInput>
                        <ColorInput label="Color: " id="text-color-input" base="#000000" />
                        <ChackboxInput label="Shadow: " id="text-shadow-checkbox" />
                        <blockquote id="text-shadow-ui" style={{display: display}}>
                            <RangeInput label="x distance: " id="hs-input" min="-50" max="50" value="0" visibleValue="px" />
                            <RangeInput label="y distance: " id="vs-input" min="-50" max="50" value="0" visibleValue="px" />
                            <RangeInput label="blur radius: " id="blur-input" min="0" max="20" value="0" visibleValue="px" />
                            <RangeInput label="opacity: " id="opacity-input" min="0" max="100" value="100" visibleValue="%" />
                            <ColorInput label="Shadow color: " id="shadow-color-input" base="#000000" />
                        </blockquote>
                       
                        <ChackboxInput label="Decoration: " id="text-decoration-checkbox" />
                            <span id="text-decoration-input" style={{display: "none", position: "absolute"}}>
                                <input type="checkbox" id="overline-checkbox" className="decoration-list" />
                                <label htmlFor="overline-checkbox">overline&nbsp;</label>
                                <input type="checkbox" id="line-through" className="decoration-list" />
                                <label htmlFor="line-through">line-through&nbsp;</label>
                                <br />
                                <input type="checkbox" id="underline-checkbox" className="decoration-list" />
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
                                    <span id="css-font-size" style={{marginLeft: "2em"}}>font-size: ;</span><br />
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