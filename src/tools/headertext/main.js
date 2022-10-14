import headertext from './headertext.module.css';
import tools from '../tools.module.css';
import $ from 'jquery';
import TextInput from '../../components/textInput';
import RangeInput from '../../components/rangeInput';
import { MenuInput, MenuList } from '../../components/menuInput';
import ColorInput from '../../components/colorInput';
import CheckboxInput from '../../components/checkboxInput';
import CodeTerminal from '../../components/codeoutput/codeTerminal';
import CSSrule from '../../components/codeoutput/css/cssRule';
import CSSproperty from '../../components/codeoutput/css/cssProperty';
import HTMLelement from '../../components/codeoutput/html/htmlElement';

function HeaderText() {

    // const [font,setFont] = useState('Arial, Helvetica, sans-serif');

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

    $(() => {
        let preview_text = $('#text');
        let text_input = $('#text-input');
        let html_span = $('#html-outputText');
        text_input.on('input', function() {
            html_span.text(text_input.val());
            preview_text.text(text_input.val());
        });
        
        // New update will refactor range input.
        let font_size_input = $('#font-size-input');
        let font_size_typing = $('#font-size-inputTyping');
        let font_value;
        function fontSizeUpdate() {
            font_value = font_size_typing.val() > 125 ? font_size_typing.val() > 300 ? 300 : font_size_typing.val() : font_size_input.val();
            font_size_typing.val(font_value);
            $('#css-font-size').text(font_value);
            preview_text.css('font-size', font_value + 'px');
        }
        font_size_input.on('input', fontSizeUpdate );
        font_size_typing.on('change', fontSizeUpdate );
    
        let fontToggle = $('#font-familiesToggle');
        let fontList = $('#font-familiesList');
        fontToggle.on('change', function() {
            $('#css-fontFam').css('display', fontToggle.prop('checked') ? 'inline' : 'none')
        });
    
        fontList.on('change', function() {
            $('#css-fontFamVal').text(fontList.val());
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
        let letSpaceTyping = $('#letter-space-inputTyping');
        let letSpaceValue;
        
        function letterSpaceUpdate() {
            letSpaceValue = letSpaceTyping.val() > 10 ? letSpaceTyping.val() > 25 ? 25 : letSpaceTyping.val() : letSpaceInput.val();
            letSpaceTyping.val(letSpaceValue);
            $('#css-letSpace-section').css('display', letSpaceInput.val() < 1 ? 'none' : 'block');
            $('#css-letSpace').text(letSpaceValue);
            preview_text.css('letter-spacing', letSpaceValue + 'px');
        }
        letSpaceInput.on('input', letterSpaceUpdate );
        letSpaceTyping.on('change', letterSpaceUpdate );

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
            $('#css-text-shadow').css('display', textShadowCheckbox.prop('checked') ? 'inline' : 'none')
            shadow_ui.css('display', textShadowCheckbox.prop('checked') ? 'block' : 'none')
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
            }
            return 'none';
        }

        function setShadow(shadow) {

            if (shadow === 'none') return;

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
                        <RangeInput label="Font-size: " id="font-size-input" min="0" max="125" value="50" visibleValue="px" canType />
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
                        <RangeInput label="Letter-spacing: " id="letter-space-input" min="0" max="10" value="0" visibleValue="px" canType />
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

                <CodeTerminal label="CSS">
                    <CSSrule selector=".header-text">
                        <CSSproperty name="font-size" defaultValue={{value: ["50"], unit: ["px"], id: ["css-font-size"]}} />
                        <CSSproperty id="css-fontFam" name="font-family" defaultValue={{value: ["Arial, Helvetica, sans-serif"], id: ["css-fontFamVal"]}} />
                        <CSSproperty name="color" defaultValue={{value: ["#000000"], id: ["css-color"], type: ["color"]}} />
                        <CSSproperty id="css-letSpace-section" name="letter-spacing" defaultValue={{value: ["0"], unit: ["px"], id: ["css-letSpace"]}} hide />
                        <CSSproperty id="css-text-shadow" name="text-shadow" defaultValue={{value: ["#000000", 0, 0, 0], unit: ['', 'px', 'px', 'px'], id: ["css-text-shadow-color", "css-text-shadow-hs", "css-text-shadow-vs", "css-text-shadow-blur"], type: ["color"]}} hide />
                        <CSSproperty id="css-decoration-section" name="text-decoration" defaultValue={{value: ["none"], id: ["css-text-decoration"]}} hide />
                    </CSSrule>
                </CodeTerminal>
                <br/>
                <br/>
                <CodeTerminal label="HTML">
                    <HTMLelement name="span" id="html-output" className="header-text" innerText="Your text here"></HTMLelement>
                </CodeTerminal>

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