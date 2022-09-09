import './style.css';
import './script';

function QRCode() {
    return (
        <div id="QRCode" style={{display: "none"}}>
            <span className="content-header">QRcode generator</span>
            <hr style={{ border: "1px solid #aaaaaa", margin: "5px 5vw px 1vw" }} />
            <div className="option">
                <input type="text" id="qr-input" placeholder="link or text here" style={{ width: "50vw" }} />
            </div>
            <div className="option">
                <label htmlFor="qr-colorInput">Color: </label>
                <span className="qr-colorUi" >
                    <input type="text" id="qr-colorInput" defaultValue="#000000" />
                    <label htmlFor="qr-colorPicker">
                        <span id="qr-customColorPicker" style={{ backgroundColor: "#000000" }}></span>
                    </label>
                    <input type="color" id="qr-colorPicker" defaultValue="#000000" />
                </span>
            </div>
            <div className="option">
                <label htmlFor="qr-bgcolorInput">Background Color: </label>
                <span className="qr-bgcolorUi">
                    <input type="text" id="qr-bgcolorInput" defaultValue="#ffffff" />
                    <label htmlFor="qr-bgcolorPicker">
                        <span id="qr-customBgcolorPicker" style={{ backgroundColor: "#ffffff" }}></span>
                    </label>
                    <input type="color" id="qr-bgcolorPicker" defaultValue="#ffffff" />
                </span>
            </div>
            <button id="qr-submit" className="success-btn">Generate</button>
            <a href="../../image/qr-placeholder.png" target="_blank" rel="noopener" id="qr-download" style={{display: "none"}}><em className="fa fa-download"></em> Download</a>
            <br />
            <img id="qr-image" src="./../../img/default/qr-placeholder.png" alt="QRcode must generate here."></img>
        </div>
    );
}

export default QRCode;