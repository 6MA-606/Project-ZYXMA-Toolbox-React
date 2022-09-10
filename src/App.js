import './App.css';
import $ from 'jquery';
import HeaderText from './tools/headertext/main';
import QRCode from './tools/qrcode/main';

// $(function () {
//     $('#HeaderText').hide();
//     $('#list_1').on('click', () => {
//         $('#QRCode').hide();
//         $('#HeaderText').show();
//     });

//     $('#list_2').on('click', () => {
//         $('#HeaderText').hide();
//         $('#QRCode').show();
//     });
    
// });

function App() {
    return (
        <div className="App">
            <div className="flex-container">
                <div className="sidenav">
                    <div className="sidenav-header">ZYXMA-Toolbox</div>
                    <div className="sidenav-list">
                        <div className="sidenav-button">
                            <span id="list_1">Header Text</span>
                        </div>
                        <div className="sidenav-button">
                            <span id="list_2">QRcode Generator</span>
                        </div>
                    </div>
                </div>
                <div className="content">
                    {/* <iframe title="QRcode" src="./tools/qrcode/qrcode.html" width="100%" id="content" style={{height: '97vh', overflow: 'auto'}}></iframe> */}
                    <HeaderText />
                    {/* <QRCode /> */}
                </div>
            </div>
        </div>
    );
}

export default App;
