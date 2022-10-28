import Shortcut from '../../components/shortcut';
import MoonToday from '../../components/widget/moonToday/main';
import ShortcutGroup from '../../components/widget/shortcutGroup.js/main';
// import AudioPlayer from '../../prototype/audioPlayer/main';
import playground from './playground.module.css';

function Playground() {
    
    return (
        <div id="Playground" className={ playground.container + " noselect"}>
            <MoonToday />

            <ShortcutGroup type="wide">
                <Shortcut thumbnail='./img/icon/leb2.png' bgimage="linear-gradient(to right, #17b5be 70px, #24dae4 100%)" color="#fff" labelAlign="center" href="https://www.leb2.org">
                    <span style={{ fontSize: '1.2em' }}><b>LEB2</b></span>
                </Shortcut>
                <Shortcut thumbnail='./img/icon/github.png' bgcolor="#2a2a2a" color="#fff" labelAlign="center" href="https://github.com/6MA-606/2565-INT100-G2-09-99_Sathu" thumbnailInvert>
                    <span style={{ fontSize: '1.2em' }}><b>99_Sathu</b></span>
                </Shortcut>
                <Shortcut thumbnail='./img/icon/pinterest.png' bgimage="linear-gradient(to right, #a00 70px, #e00 100%)" color="#fff" labelAlign="center" href="https://www.pinterest.com">
                    <span style={{ fontSize: '1.2em' }}><b>Pinterest</b></span>
                </Shortcut>
            </ShortcutGroup>

            <ShortcutGroup type="icon">
                <Shortcut thumbnail='./img/icon/spotify.png' bgcolor="#222" href="https://open.spotify.com/search" icon />
                <Shortcut thumbnail='./img/icon/ig.png' bgimage="url('./img/icon/bg/ig_bg.jpg')" href="https://www.instagram.com" thumbnailInvert icon />
                <Shortcut thumbnail='./img/icon/facebook.png' bgcolor="#05a" href="https://www.facebook.com" icon />
                <Shortcut thumbnail='./img/icon/youtube.png' bgcolor="#222" href="https://www.youtube.com" icon />
                <Shortcut thumbnail='./img/icon/laibaht-ico.png' bgcolor="#336" href="./lazyFeature/laibaht/index.html" icon tooltip="Laibaht Link Converter" />
            </ShortcutGroup>

            <ShortcutGroup type="icon">
                <Shortcut thumbnail='./img/icon/ilovepdf.png' bgcolor="#f8f8ff" href="https://www.ilovepdf.com" icon />
                <Shortcut thumbnail='./img/icon/htmlcolorcode.png' bgcolor="#f8f8ff" href="https://htmlcolorcodes.com" icon tooltip="HTML Color Codes" />
                <Shortcut thumbnail='./img/icon/overapi.png' bgcolor="#444850" href="https://overapi.com" icon tooltip="OverAPI" />
                <Shortcut thumbnail='./img/icon/convertio.png' bgcolor="#f8f8ff" href="https://convertio.co" icon tooltip="Convertio"/>
                <Shortcut thumbnail='./img/icon/canva.png' bgimage="linear-gradient(to right bottom, #01c2cc, #6722c7)" href="https://www.canva.com" icon />
                <Shortcut thumbnail='./img/icon/audo.png' bgcolor="#222" href="https://audo.ai" icon tooltip="Audo"/>
                <Shortcut thumbnail='./img/icon/colorsupply.png' bgcolor="#f8f8ff" href="https://colorsupplyyy.com/app" icon tooltip="Color Supply"/>
                <Shortcut thumbnail='./img/icon/flexboxfroggy.png' bgcolor="#43a047" href="https://flexboxfroggy.com" icon tooltip="Flexbox Froggy"/>
                <Shortcut thumbnail='./img/icon/bootstrap5_icon.png' bgimage="url('./img/icon/bg/bootstrap5_icon_bg.jpg')" href="https://icons.getbootstrap.com" icon tooltip="Bootstrap5 Icon"/>
            </ShortcutGroup>

            {/* <AudioPlayer /> */}
            {/* <RandomNumber /> */}

        </div>
    );
}
export default Playground;