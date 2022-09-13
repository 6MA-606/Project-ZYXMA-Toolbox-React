import './App.css';
import $ from 'jquery';
import { useState } from 'react';
import HeaderText from './tools/headertext/main';
import QRCode from './tools/qrcode/main';
import AboutMe from './abouts/main';

function App() {

    const [header,setHeader] = useState(<div>Header Text Generator</div>);
    const [content,setContent] = useState(<HeaderText />);

    $(function () {
        
        $('.list_1').on('click', () => {
            setHeader(<div>Header Text Generator</div>);
            setContent(<HeaderText />);
        });
    
        $('.list_2').on('click', () => {
            setHeader(<div>QRCode Generator</div>);
            setContent(<QRCode />);
        });

        $('.about_me').on('click', () => {
            setHeader(<div>About me</div>);
            setContent(<AboutMe />);
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
        <div className="App">
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
                </div>
            </div>
            <div className="flex-container">
                <div className="sidenav">
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
                    </div>
                    <span className='sidenav-footer'>
                        <div className="about_me">About me</div>
                    </span>
                </div>
                <div className="content">
                    <span id="header">
                        { header }
                    </span>
                    { content }
                </div>
            </div>
        </div>
    );
}

export default App;
