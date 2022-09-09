import $ from 'jquery';

$(document).ready(function () {
    let parametersJson = {
        "size": 250, // Size of Qr Code
        "backgroundColor": "255-255-255", // Background Color Of Qr Code (In RGB)
        "qrColor": "00-00-00", // Color of Qr Code (In RGB)
        "padding": 2, // Padding 
        "data": "dev.to",
        "download": 1
    };

    let parameters;

    let img = $('#qr-image');
    let input = $('#qr-input');
    let colorInput = $('#qr-colorInput');
    let colorPicker = $('#qr-colorPicker');
    let customColorPicker = $('#qr-customColorPicker');
    let bgcolorInput = $('#qr-bgcolorInput');
    let bgcolorPicker = $('#qr-bgcolorPicker');
    let customBgcolorPicker = $('#qr-customBgcolorPicker');

    let button = $('#qr-submit');
    let download = $('#qr-download');

    const hexToDecimal = hex => parseInt(hex, 16)

    colorInput.on('input', () => {
        if (colorInput.val().length == 7) {
            colorPicker.val(colorInput.val());
            customColorPicker.css('background-color', colorInput.val());
        }
    });

    colorPicker.on('input', () => {
        colorInput.val(colorPicker.val());
        customColorPicker.css('background-color', colorPicker.val());
    });

    bgcolorInput.on('input', () => {
        if (bgcolorInput.val().length == 7) {
            bgcolorPicker.val(bgcolorInput.val());
            customBgcolorPicker.css('background-color', bgcolorInput.val());
        }
    });

    bgcolorPicker.on('input', () => {
        bgcolorInput.val(bgcolorPicker.val());
        customBgcolorPicker.css('background-color', bgcolorPicker.val());
    });

    button.click(() => {

        parametersJson.data = input.val() || '';

        let red, green, blue;

        red = hexToDecimal(colorInput.val()[1] + '' + colorInput.val()[2]);
        green = hexToDecimal(colorInput.val()[3] + '' + colorInput.val()[4]);
        blue = hexToDecimal(colorInput.val()[5] + '' + colorInput.val()[6]);
        parametersJson.qrColor = red + '-' + green + '-' + blue;

        red = hexToDecimal(bgcolorInput.val()[1] + '' + bgcolorInput.val()[2]);
        green = hexToDecimal(bgcolorInput.val()[3] + '' + bgcolorInput.val()[4]);
        blue = hexToDecimal(bgcolorInput.val()[5] + '' + bgcolorInput.val()[6]);
        parametersJson.backgroundColor = red + '-' + green + '-' + blue;
        
        if (parametersJson.data != '') {
            parameters = `size=${parametersJson.size}&bgcolor=${parametersJson.backgroundColor}&color=${parametersJson.qrColor}&qzone=${parametersJson.padding}&data=${parametersJson.data}`; // Stitch Together all Paramenters
            button.attr('class', 'warning-btn').text('Re-generate');
            download.attr('href', `https://api.qrserver.com/v1/create-qr-code/?${parameters}` + '&download=1').show();
            img.attr('src', `https://api.qrserver.com/v1/create-qr-code/?${parameters}`); // Set Image URL To Link
        } else {
            button.attr('class', 'success-btn').text('Generate');
            download.attr('href', '').hide();
            img.attr('src', `./../../img/default/qr-placeholder.png`);
        }
        
    });

    // download.click(() => {
    //     var param = {"download":1}
    //     window.location.href = `https://api.qrserver.com/v1/create-qr-code/?${parameters}` + `${param}`;
    // });
    
});