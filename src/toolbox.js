import './toolbox.css';
import $ from 'jquery';
import { useState } from 'react';
import HeaderText from './tools/headertext/main';
import QRCode from './tools/qrcode/main';
import AboutMe from './abouts/main';
import Playground from './tools/playground/main';
import ElementBox from './tools/box/main';


function Toolbox() {

    const [header,setHeader] = useState('');
    const [content,setContent] = useState('');

    function load() {
        switch(localStorage.getItem('page')) {
            case '101':
                setHeader(<div>QRCode Generator</div>);
                setContent(<QRCode />);
                break;
            case '102':
                setHeader(<div>Element Box Generator</div>);
                setContent(<ElementBox />);
                break;
            case '103':
                setHeader(<div>Playground</div>);
                setContent(<Playground />);
                break;
            case '600':
                setHeader(<div>About me</div>);
                setContent(<AboutMe />);
                break;
            default:
                setHeader(<div>Header Text Generator</div>);
                setContent(<HeaderText />);
        }
    }

    $( window ).on('load', load);



    $(function () {
        $('.list_1').on('click', () => {
            setHeader(<div>Header Text Generator</div>);
            setContent(<HeaderText />);
            localStorage.setItem('page', '100');
        });

        $('.list_2').on('click', () => {
            setHeader(<div>QRCode Generator</div>);
            setContent(<QRCode />);
            localStorage.setItem('page', '101');
        });

        $('.list_3').on('click', () => {
            setHeader(<div>Element Box Generator</div>);
            setContent(<ElementBox />);
            localStorage.setItem('page', '102');
        });

        $('.list_4').on('click', () => {
            setHeader(<div>Playground</div>);
            setContent(<Playground />);
            localStorage.setItem('page', '103');
        });

        $('.about_me').on('click', () => {
            setHeader(<div>About me</div>);
            setContent(<AboutMe />);
            localStorage.setItem('page', '600');
        });
        
    });

    function toggleNav() {
        let slidenav = $('#slidenav');
        let slidenavBtn = $('#slidenavBtn');
        
        if (slidenav.css('width') !== '250px') {
            slidenav.css('width', '250px')
            slidenavBtn.css('margin-left', '250px');
        } else {
            slidenav.css('width', '0px')
            slidenavBtn.css('margin-left', '0px');
        }
    }

    return (
        <div>
            <button id='slidenavBtn' onClick={ toggleNav }></button>
            <div id="slidenav">
                <span className="slidenav-header">
                    <div>ZYXMA-Toolbox</div>
                </span>
                <div className="slidenav-list">
                    <div className="slidenav-button">
                        <span className="list_1">Header Text</span>
                    </div>
                    <div className="slidenav-button">
                        <span className="list_2">QRcode Generator</span>
                    </div>
                    <div className="slidenav-button">
                        <span className="list_3">Element Box</span>
                    </div>
                    <div className="slidenav-button">
                        <span className="list_4">Playground</span>
                    </div>
                </div>
            </div>
            <div className="flex-container">
                <div className="sidenav noselect">
                    <span className="sidenav-header">
                        <div>ZYXMA-Toolbox</div>
                    </span>
                    <div className="sidenav-list">
                        <div className="sidenav-button">
                            <span className="list_1">Header Text</span>
                        </div>
                        <div className="sidenav-button">
                            <span className="list_2">QRcode Generator</span>
                        </div>
                        <div className="sidenav-button">
                            <span className="list_3">Element Box</span>
                        </div>
                        <div className="sidenav-button">
                            <span className="list_4">Playground</span>
                        </div>
                    </div>
                    <span className='sidenav-footer'>
                        <div className="about_me">About me</div>
                    </span>
                </div>
                <div className="content">
                    <span id="header" style={{ flex: '8vh' }}>
                        { header }
                    </span>
                    <div id="feature" style={{ flex: '92vh' }}>
                        { content }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Toolbox;
