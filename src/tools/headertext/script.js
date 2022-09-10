import $ from 'jquery';

function decimalToHex(d, padding) {
    let hex = Number(d).toString(16);
    padding = typeof (padding) === 'undefined' || padding === null ? 2 : padding;
    while (hex.length < padding) { hex = '0' + hex; }
    return hex;
}

$(document).ready(function() {
    let preview_text = $('#text');
    let text_input = $('#text-input');
    let html_span = $('#html-span');
    text_input.on('input', function() {
        html_span.text('<span class="header-text">' + text_input.val() + '</span>');
        preview_text.text(text_input.val());
    });

    let font_size = $('#font-size');
    let font_size_input = $('#font-size-input');
    font_size_input.on('input', function() {
        font_size.text(font_size_input.val() + 'px');
        $('#css-font-size').text('font-size: ' + font_size_input.val() + 'px;');
        preview_text.css('font-size', font_size_input.val() + 'px');
    });

    let fontFamily = $('#font-family-checkbox');
    let fontList = $('#font-families-list');
    fontFamily.on('change', function() {
        fontList.prop('disabled', fontFamily.prop('checked') ? false : true);
        if (fontList.prop('disabled')) {
            $('#css-font-family').text('');
            $('#css-fontFamily-br').hide();
            $('#css-font-family').css('margin-left', '0em');
        } else {
            $('#css-font-family').text('font-family: ' + fontList.val() + ';');
            $('#css-fontFamily-br').show();
            $('#css-font-family').css('margin-left', '2em');
        }
    });

    fontList.on('change', function() {
        if (fontFamily.prop('checked')) {
            $('#css-font-family').text('font-family: ' + fontList.val() + ';');
            preview_text.css('font-family', fontList.val());
        }
    });

    let colorPicker = $('#text-color-picker');
    let customColorPicker = $('#custom-color-picker');
    let c_input = $('#text-color-input');
    c_input.on('input', function() {
        if (c_input.val().length == 7) {
            colorPicker.val(c_input.val());
            customColorPicker.css('background-color', c_input.val());
            preview_text.css('color', c_input.val());
        }
    });

    colorPicker.on('input', function() {
        customColorPicker.css('background-color', colorPicker.val());
        c_input.val(colorPicker.val());
        $('#css-color').text('color: ' + c_input.val() + ';');
        preview_text.css('color', c_input.val());
    });

    let textShadowCheckbox = $('#text-shadow-checkbox');
    let shadowColorPicker = $('#shadow-color-picker');
    let customShadowColorPicker = $('#custom-shadow-color-picker');
    let hs_input = $('#hs-input');
    let vs_input = $('#vs-input');
    let blur_input = $('#blur-input');
    let sc_input = $('#shadow-color-input');
    let s_opacity_input = $('#opacity-input');
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
        setShadow(textShadow());
    });

    hs_input.on('input', function() {
        $('#hs-value').text(hs_input.val() + 'px');
        setShadow(textShadow());
    });

    vs_input.on('input', function() {
        $('#vs-value').text(vs_input.val() + 'px');
        setShadow(textShadow());
    });

    blur_input.on('input', function() {
        $('#blur-value').text(blur_input.val() + 'px');
        setShadow(textShadow());
    });

    sc_input.on('input', function() {
        if (sc_input.val().length == 7) {
            shadowColorPicker.val(sc_input.val());
            customShadowColorPicker.css('background-color', sc_input.val());
            setShadow(textShadow());
        }
    });
    
    s_opacity_input.on('input', function() {
        $('#opacity-value').text(s_opacity_input.val() + '%');
        hex_opacity_value = decimalToHex(Math.ceil((255 / 100) * s_opacity_input.val()), 2);
        setShadow(textShadow());
    });

    shadowColorPicker.on('input', function() {
        customShadowColorPicker.css('background-color', shadowColorPicker.val());
        sc_input.val(shadowColorPicker.val());
        setShadow(textShadow());
    });

    function textShadow() {
        if (textShadowCheckbox.prop('checked')) {
            return sc_input.val() + hex_opacity_value + ' ' + hs_input.val() + 'px ' + vs_input.val() + 'px ' + blur_input.val() + 'px';
        } else {
            return '';
        }
    }

    function setShadow(shadow) {
        $('#css-text-shadow').text('text-shadow: ' + shadow + ';');
        preview_text.css('text-shadow', shadow);
    }

    let decorationCheckbox = $('#text-decoration-checkbox');
    let decoration_ui = $('#text-decoration-input');
    let decorationList = $('.decoration-list');
    let overline = $('#overline-checkbox');
    let underline = $('#underline-checkbox');
    let lineThrough = $('#line-through');
    decorationCheckbox.on('change', function() {
        if (decorationCheckbox.prop('checked')) {
            decoration_ui.show();
        } else {
            decoration_ui.hide();
            $('#css-text-decoration').text('text-decoration: none;');
            preview_text.css('text-decoration', 'none');
        }
        setDecorate();
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
        if (dec_style == '') {
              dec_style = 'none';
         }
        $('#css-text-decoration').text('text-decoration: ' + dec_style + ';');
        preview_text.css('text-decoration', dec_style);
    }

    let previewBg = $('#preview-bg');
    let customPreviewBg = $('#custom-preview-bg');
    let previewBox = $('#preview-box');
    previewBg.on('input', function() {
        customPreviewBg.css('background-color', previewBg.val());
        previewBox.css('background-color', previewBg.val());
    });
});