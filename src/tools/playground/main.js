import Shortcut from '../../components/shortcut';
import { DarkModeSwitch } from '../../components/widget/darkModeSwitch/main';
import MoonToday from '../../components/widget/moonToday/main';
import ShortcutGroup from '../../components/widget/shortcutGroup.js/main';
import { Icon } from '../../components/icon/main';
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
                <Shortcut thumbnail='./img/icon/helloworld-ico.png' bgimage="linear-gradient(to right bottom, #f7c777, #e59744)" href="https://helloworld-fennec-2022.gitbook.io/helloworldfennec2022/" icon tooltip="SIT Helloworld 2022" />
                <Shortcut internalThumbnail bgcolor="#1e2432" href="https://cssgrid-generator.netlify.app" icon tooltip="CSS Grid Generator">
                    <svg data-v-1d215c44="" xmlns="http://www.w3.org/2000/svg" fill="#08ffbd" viewBox="0 0 100 100" width="50" height="50">
                        <g data-v-1d215c44="" fillRule="nonzero" className="logo">
                            <path data-v-1d215c44="" d="M23 23v65h65V23H23zm-1-1h67v67H22V22zM10 10v8h8v-8h-8zM9 9h10v10H9V9z"></path>
                            <path data-v-1d215c44="" d="M9.146 9.854a.5.5 0 1 1 .708-.708l9 9a.5.5 0 0 1-.708.708l-9-9zM33 22h1v66.168h-1zM66 22h1v66.168h-1zM44 22h1v66.168h-1zM77 22h1v66.168h-1zM55 22h1v66.168h-1z"></path>
                            <path data-v-1d215c44="" d="M88.584 34.084v-1H22.416v1zM88.584 78.084v-1H22.416v1zM88.584 56.084v-1H22.416v1zM88.584 45.084v-1H22.416v1zM89.084 67.084v-1H22.916v1zM13 18.5h1V89h-1zM18 14v-1h71v1z"></path>
                            <path data-v-1d215c44="" d="M88 9h1v9h-1zM9 89v-1h9v1z"></path>
                        </g>
                    </svg>
                </Shortcut>
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