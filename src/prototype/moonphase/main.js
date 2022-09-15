import $ from 'jquery';
import { useState } from 'react';
import moon from './moonphase.module.css';

function removeItemAll(arr, value) {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] === value) {
            arr.splice(i, 1);
        } else {
            ++i;
        }
    }
    return arr;
}

function MoonInfo(props) {
    const { luminated, nextFullmoon } = props;

    const [percent,setPercent] = useState(0);
    const [next,setNext] = useState('');
    
    $.get('https://www.fullmoonphase.com/asia/thailand/bangkok.htm').then(function(html) {
        
        let rawdata = $(html).find('#moon-phase');
        const data_00 = (rawdata.text()).split('on');
        const data_01 = (data_00[data_00.length - 1].split('\t'));
        removeItemAll(data_01, '')

        const data_10 = (rawdata.text()).split('new');
        const data_11 = (data_10[data_10.length - 2].split('on'));
        const data_12 = (data_11[data_11.length - 1].split('\n'));
    
        const percent = data_01[1].replace(' illuminated\n', '');
        const next = data_12[0].replace('.', '').replace(' ', '');

        setNext(next);
        setPercent(parseFloat(percent));

    });

    if ( luminated ) {
        return percent;
    } else if ( nextFullmoon ) {
        return next;
    }
        
}

function MoonPhase() {
    let percent = MoonInfo({ luminated: true });
    
    if (percent > 50) {
        $('#left').css('width', 0 + 'px');
        $('#right').css('width', (percent - 50) + 'px');
    } else if (percent < 50) { 
        $('#left').css('width', (percent - 50) + 'px');
        $('#right').css('width', 0 + 'px');
    } else {
        $('#left').css('width', 0 + 'px');
        $('#right').css('width', 0 + 'px');
    }

    return (
        <div style={{ width: "100px", height: "100px"}}>
            <div className={ moon.moon } style={{ transform: 'rotate(180deg)', background: 'url("./img/general/moon.jpg")' }}>
                <div className={ moon.moonDark1 }>
                    <div className={ moon.moonLight } id="right" style={{ background: 'url("./img/general/half-moon.jpg")'}}></div>
                </div>
                <div className={ moon.moonDark2 } id="left"></div>
            </div>
        </div>
    );
}

export {MoonPhase, MoonInfo};