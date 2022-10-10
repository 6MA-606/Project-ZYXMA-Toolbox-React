import headertext from './headertext.module.css';
import tools from '../tools.module.css';
import $ from 'jquery';
import TextInput from '../../components/textInput';
import RangeInput from '../../components/rangeInput';
import { MenuInput, MenuList } from '../../components/menuInput';
import ColorInput from '../../components/colorInput';
import CheckboxInput from '../../components/checkboxInput';
import { useState } from 'react';

function HeaderText() {

    const [font,setFont] = useState('Arial, Helvetica, sans-serif');

    function decimalToHex(d, padding) {
        let hex = Number(d).toString(16);
        padding = typeof (padding) === 'undefined' || padding === null ? 2 : padding;
        while (hex.length < padding) { hex = '0' + hex; }
        return hex;
    }

    const hexToDecimal = hex => parseInt(hex, 16);

        function hexToRGB(hex) {

        let red, green, blue;
    
        red = hexToDecimal(hex[1] + '' + hex[2]);
        green = hexToDecimal(hex[3] + '' + hex[4]);
        blue = hexToDecimal(hex[5] + '' + hex[6]);
        return { red, green, blue };
    
    }

    function textLight(bgcolor) {
        if (hexToRGB(bgcolor).red > 127 ||
            hexToRGB(bgcolor).blue > 127 ||
            hexToRGB(bgcolor).green > 127) {
            return '#000000';
        } else {
            return '#ffffff';
        }
    }

    $(function() {
        let preview_text = $('#text');
        let text_input = $('#text-input');
        let html_span = $('#html-span');
        text_input.on('input', function() {
            html_span.text(text_input.val());
            preview_text.text(text_input.val());
        });
        
        // let preview_text = document.querySelector('#text');
        // let font_size = document.querySelector('#font-size');
        // let font_size_input = document.querySelector('#font-size-input');
        
        // font_size_input.addEventListener("input", function() {

        //     font_size.innerHTML = font_size_input.value + 'px';
        //     document.querySelector('#css-font-size').innerHTML = font_size_input.value;
        //     preview_text.style.fontSize = font_size_input.value + 'px';

        // });
        

        let font_size = $('#font-size');
        let font_size_input = $('#font-size-input');
        font_size_input.on('input', function() {
            font_size.text(font_size_input.val() + 'px');
            $('#css-font-size').text(font_size_input.val());
            preview_text.css('font-size', font_size_input.val() + 'px');
        });
    
        let fontToggle = $('#font-familiesToggle');
        let fontList = $('#font-familiesList');
        fontToggle.on('change', function() {
            if (!fontToggle.prop('checked')) {
                $('#css-font-family').hide();
                $('#css-fontFamily-br').hide();
                $('#css-font-family').css('margin-left', '0em');
            } else {
                $('#css-font-family').show();
                $('#css-fontFamily-br').show();
                $('#css-font-family').css('margin-left', '2em');
            }
        });
    
        fontList.on('change', function() {
            setFont(fontList.val());
            preview_text.css('font-family', fontList.val());
        });
    
        let colorPicker = $('#colorPicker');
        colorPicker.on('input', function() {
            $('#css-color').text(colorPicker.val());
            $('#css-color').css('background-color', colorPicker.val());
            $('#css-color').css('color', textLight(colorPicker.val()));
            preview_text.css('color', colorPicker.val());
        });

        let colorInput = $('#colorInput');
        colorInput.on('input', function() {
            $('#css-color').text(colorInput.val());
            $('#css-color').css('background-color', colorInput.val());
            preview_text.css('color', colorInput.val());
        });

        let letSpaceInput = $('#letter-space-input');
        letSpaceInput.on('input', function() {
            $('#css-letSpace-section').css('display', letSpaceInput.val() < 1 ? 'none' : 'block');
            $('#css-letSpace').text(letSpaceInput.val());
            preview_text.css('letter-spacing', letSpaceInput.val() + 'px');
        });
    
        let textShadowCheckbox = $('#text-shadow-checkbox');
        let shadowColorPicker = $('#shadowColorPicker');
        let shadowColorInput = $('#shadowColorInput');
        let hs_input = $('#hs-input');
        let vs_input = $('#vs-input');
        let blur_input = $('#blur-input');
        let opacity_input = $('#opacity-input');
        let hex_opacity_value = 'ff';
        let shadow_ui = $('#text-shadow-ui')
        textShadowCheckbox.on('change', function() {
            if (textShadowCheckbox.prop('checked')) {
                shadow_ui.show();
                $('#css-text-shadow').show();
                $('#css-shadow-br').show();
            } else {
                shadow_ui.hide();
                $('#css-text-shadow').hide();
                $('#css-shadow-br').hide();
            }
            setShadow(textShadow(shadowColorInput.val()));
        });
    
        hs_input.on('input', function() {
            $('#hs-value').text(hs_input.val() + 'px');
            setShadow(textShadow(shadowColorInput.val()));
        });
    
        vs_input.on('input', function() {
            $('#vs-value').text(vs_input.val() + 'px');
            setShadow(textShadow(shadowColorInput.val()));
        });
    
        blur_input.on('input', function() {
            $('#blur-value').text(blur_input.val() + 'px');
            setShadow(textShadow(shadowColorInput.val()));
        });
    
        opacity_input.on('input', function() {
            hex_opacity_value = decimalToHex(Math.ceil(opacity_input.val() * 2.55), 2);
            setShadow(textShadow(shadowColorInput.val()));
        });
        
        shadowColorPicker.on('input', function() {
            setShadow(textShadow(shadowColorPicker.val()));
        });

        shadowColorInput.on('input', function() {
            $('#opacity-inputBlock').css('opacity', shadowColorInput.val()[0] !== '#' ? '50%' : '100%');
            opacity_input.prop('disabled', shadowColorInput.val()[0] !== '#' ? true : false);
            hex_opacity_value = shadowColorInput.val()[0] !== '#' ? '' : decimalToHex(Math.ceil(opacity_input.val() * 2.55), 2);
            setShadow(textShadow(shadowColorInput.val()));
        });
    
        function textShadow(color) {
            if (textShadowCheckbox.prop('checked')) {
                let shadow = {
                    color: color,
                    hex: hex_opacity_value,
                    hs: hs_input.val(),
                    vs: vs_input.val(),
                    blur: blur_input.val(),
                    complete: color + hex_opacity_value + ' ' + hs_input.val() + 'px ' + vs_input.val() + 'px ' + blur_input.val() + 'px'
                }
                return shadow;
            } else {
                return '';
            }
        }

        function setShadow(shadow) {
            $('#css-text-shadow-color').css('background-color', shadow.color);
            $('#css-text-shadow-color').css('color', textLight(shadow.color));
            $('#css-text-shadow-color').text(shadow.color + shadow.hex);
            $('#css-text-shadow-hs').text(' ' + shadow.hs);
            $('#css-text-shadow-vs').text(' ' + shadow.vs);
            $('#css-text-shadow-blur').text(' ' + shadow.blur);
            preview_text.css('text-shadow', shadow.complete);
        }
    
        let decorationCheckbox = $('#text-decoration-checkbox');
        let decoration_ui = $('#text-decoration-ui');
        let decorationList = $('.decoration-list');
        let overline = $('#overline');
        let underline = $('#underline');
        let lineThrough = $('#line-through');
        decorationCheckbox.on('change', function() {
            if (decorationCheckbox.prop('checked')) {
                decoration_ui.show();
                setDecorate();
            } else {
                decoration_ui.hide();
                $('#css-text-decoration').text(' none');
                preview_text.css('text-decoration', 'none');
            }
            $('#css-decoration-section').css('display', decorationCheckbox.prop('checked') ? 'block' : 'none');
        });
    
        decorationList.on('change', function() {
            setDecorate();
        });
    
        function setDecorate() {
            let dec_style = '';
            if (underline.prop('checked')) {
                dec_style += overline.prop('checked') ? 'underline ' : 'underline';
            }
            if (overline.prop('checked')) {
                dec_style += 'overline';
            }
            if (lineThrough.prop('checked')) {
                dec_style += overline.prop('checked') || underline.prop('checked') ? ' line-through' : 'line-through';
            }
            if (dec_style === '') {
                  dec_style = 'none';
             }
            $('#css-text-decoration').text(dec_style);
            preview_text.css('text-decoration', dec_style);
        }
    
        let previewBgPicker = $('#previewBgPicker');
        let previewBgInput = $('#previewBgInput');
        let previewBox = $('#preview-box');
        previewBgPicker.on('input', function() {
            previewBox.css('background-color', previewBgPicker.val());
        });

        previewBgInput.on('input', function() {
            previewBox.css('background-color', previewBgInput.val());
        });
    });

    return (
        <div id="HeaderText" className={ headertext.flexContainer }>
            <div style={{ flex: '40%' }}>
                <div className={ tools.toolbox }>
                    <div className={ tools.toping }>
                        <TextInput id="text-input" placeholder="Your text here" value="Your text here" />
                        <RangeInput label="Font-size: " id="font-size-input" min="0" max="125" value="50" visibleValue="px" />
                        <MenuInput label="Font Family: " id="font-families" toggleButton>
                            <MenuList label="Arial" value="Arial, Helvetica, sans-serif" />
                            <MenuList label="Courier New" value="'Courier New', Courier, monospace" />
                            <MenuList label="Franklin Gothic Medium" value="'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" />
                            <MenuList label="Gill Sans" value="'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" />
                            <MenuList label="Lucida Sans" value="'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif" />
                            <MenuList label="Segoe UI" value="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" />
                            <MenuList label="Times New Roman" value="'Times New Roman', Times, serif" />
                        </MenuInput>
                        <ColorInput label="Color: " id="color" className="color" base="#000000" />
                        <RangeInput label="Letter-spacing: " id="letter-space-input" min="0" max="10" value="0" visibleValue="px" />
                        <CheckboxInput label="Shadow: " labelDisplay="front" id="text-shadow-checkbox" />
                        <div className={ headertext.textShadowUi } id="text-shadow-ui" style={{ display: 'none' }}>
                            <RangeInput label="x distance: " id="hs-input" min="-50" max="50" value="0" visibleValue="px" />
                            <RangeInput label="y distance: " id="vs-input" min="-50" max="50" value="0" visibleValue="px" />
                            <RangeInput label="blur radius: " id="blur-input" min="0" max="20" value="0" visibleValue="px" />
                            <RangeInput label="opacity: " id="opacity-input" min="0" max="100" value="100" visibleValue="%" />
                            <ColorInput label="Shadow color: " id="shadowColor" className="shadowColor" base="#000000" />
                        </div>
                        <CheckboxInput label="Decoration: " labelDisplay="front" id="text-decoration-checkbox" />
                        <span className={ headertext.textDecorationUi } id="text-decoration-ui" style={{ display: 'none' }}>
                            <CheckboxInput label="overline&nbsp;" labelDisplay="behind" id="overline" className="decoration-list" />
                            <CheckboxInput label="line-through&nbsp;" labelDisplay="behind" id="line-through" className="decoration-list" />
                            <CheckboxInput label="underline&nbsp;" labelDisplay="behind" id="underline" className="decoration-list" />
                        </span>
                    </div>
                </div>
                <br />
                <div className="code-terminal">
                    <div className={ headertext.css_terminal }>
                        <div className={ headertext.terminalLabel } style={{ textAlign: "left" }}>
                            <span>CSS</span>
                            {/* <button onclick="cssCopy()">COPY</button> */}
                        </div>
                        <div className={ headertext.css_output } id="css-output">
                            <code id="css-code">
                                <span style={{ color: '#ffbf00' }}>.header-text &#123;<br /></span>
                                <span style={{ marginLeft: "2em", color: '#cccccc' }}>font-size: </span>
                                <span id="css-font-size" style={{ color: '#ffbf00' }}>50</span>
                                <span style={{ color: '#ff5555' }}>px</span>
                                <span style={{ color: '#cccccc' }}>;</span>
                                <br />
                                <span id="css-font-family" style={{ marginLeft: "2em" }}>
                                    <span style={{ color: '#cccccc' }}>font-family: </span>
                                    <span id="css-font-family-value" style={{ color: '#ffbf00' }}>{ font }</span>
                                    <span style={{ color: '#cccccc' }}>;</span>
                                </span>
                                <br id="css-fontFamily-br" />
                                <span style={{ marginLeft: "2em", color: '#cccccc' }}>color: </span>
                                <span id="css-color" style={{ backgroundColor: '#000000', borderRadius: '5px', padding: "0px 3px 0px 3px"}}>#000000</span>
                                <span style={{ color: '#cccccc' }}>;</span>
                                <br />
                                <span id="css-letSpace-section" style={{ display: 'none' }}>
                                    <span style={{ marginLeft: "2em", color: '#cccccc' }}>letter-spacing: </span>
                                    <span id="css-letSpace" style={{ color: '#ffbf00' }}>0</span>
                                    <span style={{ color: '#ff5555' }}>px</span>
                                    <span style={{ color: '#cccccc' }}>;</span>
                                    <br />
                                </span>
                                <span id="css-text-shadow" style={{ marginLeft: "2em", display: "none" }} >
                                    <span style={{ color: '#cccccc' }}>text-shadow: </span>
                                    <span id="css-text-shadow-color" style={{ color: '#ffffff', backgroundColor: '#000000', borderRadius: '5px', padding: "0px 3px 0px 3px"}}>#000000ff</span>
                                    <span id="css-text-shadow-hs" style={{ color: '#ffbf00' }}> 0</span>
                                    <span style={{ color: '#ff5555' }}>px</span>
                                    <span id="css-text-shadow-vs" style={{ color: '#ffbf00' }}> 0</span>
                                    <span style={{ color: '#ff5555' }}>px</span>
                                    <span id="css-text-shadow-blur" style={{ color: '#ffbf00' }}> 0</span>
                                    <span style={{ color: '#ff5555' }}>px</span>
                                    <span style={{ color: '#cccccc' }}>;</span>
                                </span>
                                <br id="css-shadow-br" style={{ display: "none" }} />
                                <div id="css-decoration-section" style={{ display: 'none' }}>
                                    <span style={{ marginLeft: "2em", color: '#cccccc'}}>text-decoration: </span>
                                    <span id="css-text-decoration" style={{ color: '#ffbf00'}}> none</span>
                                    <span style={{ color: '#cccccc'}}>;</span>
                                    <br />
                                </div>
                                <span style={{ color: '#ffbf00' }}>&#125;</span>
                            </code>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className={ headertext.html_terminal }>
                        <div className={ headertext.terminalLabel } style={{ textAlign: "left" }}>
                            <span>HTML</span>
                        </div>
                        <div className={ headertext.html_output } id="html-output">
                            <code>
                                <span>
                                    <span style={{ color: '#cccccc' }}>&lt;</span><span style={{ color: '#ff5555' }}>span</span> <span style={{ color: '#ffbf00' }}>className</span><span style={{ color: '#00dddd' }}>=</span><span style={{ color: '#55dd55' }}>"header-text"</span><span style={{ color: '#cccccc' }}>&gt;</span>
                                    <span id="html-span">Your text here</span>
                                    <span style={{ color: '#cccccc' }}>&lt;</span><span style={{ color: '#cccccc' }}>/</span><span style={{ color: '#ff5555' }}>span</span><span style={{ color: '#cccccc' }}>&gt;</span>
                                </span>
                            </code>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ flex: '60%', textAlign: 'center' }}>
                <div className={ headertext.preview + ' ' + tools.toolbox } style={{ overflow: "hidden", backgroundColor: "#dddddd" }}>
                    <span className={ headertext.previewLabel }>
                        <ColorInput label="Preview&nbsp;&nbsp;&nbsp;" labelDisplay="front" id="previewBg" className="previewBg" base="#ffffff"/>
                    </span>
                    <div className={ headertext.previewBlock } id="preview-box" style={{ backgroundColor: "#ffffff", width: "100%", height: "100%" }}>
                        <span className={ headertext.previewText } style={{ fontSize: '50px' }} id="text">
                            Your text here
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderText;