import Shortcut from '../../components/shortcut';
import ShortcutGrid from '../../components/widget/shortcutGrid/main';
// import { DarkModeSwitch } from '../../components/widget/darkModeSwitch/main';
// import MoonToday from '../../components/widget/moonToday/main';
// import { Icon } from '../../components/icon/main';
// import AudioPlayer from '../../prototype/audioPlayer/main';
import playground from './playground.module.css';

function Playground() {
    
    return (
        <div id="Playground" className={ playground.container + " noselect"}>
            {/* <MoonToday /> */}

            <ShortcutGrid label="Relax Zone">
                <Shortcut thumbnail='./img/icon/spotify.png' bgcolor="#222" href="https://open.spotify.com/search" icon />
                <Shortcut thumbnail='./img/icon/youtube.png' bgcolor="#222" href="https://www.youtube.com" icon />
                <Shortcut thumbnail='./img/icon/ig.png' bgimage="url('./img/icon/bg/ig_bg.jpg')" href="https://www.instagram.com" thumbnailInvert icon />
                <Shortcut thumbnail='./img/icon/facebook.png' bgcolor="#05a" href="https://www.facebook.com" icon />
                
                
            </ShortcutGrid>

            <ShortcutGrid label="Education">
                <Shortcut thumbnail='./img/icon/helloworld-ico.png' bgimage="linear-gradient(to right bottom, #f7c777, #e59744)" href="https://helloworld-fennec-2022.gitbook.io/helloworldfennec2022/" icon tooltip="SIT Helloworld 2022" />
                <Shortcut thumbnail='./img/icon/overapi.png' bgcolor="#444850" href="https://overapi.com" icon tooltip="OverAPI" />
                <Shortcut thumbnail='./img/icon/flexboxfroggy.png' bgcolor="#43a047" href="https://flexboxfroggy.com" icon tooltip="Flexbox Froggy"/>
                <Shortcut thumbnail='./img/icon/gridgarden.png' bgcolor="#836b32" href="https://cssgridgarden.com" icon tooltip="Grid Garden"/>
                <Shortcut thumbnail='./img/icon/flexboxzombies.png' bgimage="linear-gradient(to bottom, #9c2743, #473251)" href="https://mastery.games/flexboxzombies/" icon tooltip="Flexbox Zombies"/>
            </ShortcutGrid>

            <ShortcutGrid label="Tools">
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
                <Shortcut thumbnail='./img/icon/ilovepdf.png' bgcolor="#f8f8ff" href="https://www.ilovepdf.com" icon tooltip="iLovePDF"/>
                <Shortcut thumbnail='./img/icon/iloveimg.png' bgcolor="#f8f8ff" href="https://www.iloveimg.com" icon tooltip="iLoveIMG"/>
                <Shortcut thumbnail='./img/icon/convertio.png' bgcolor="#f8f8ff" href="https://convertio.co" icon tooltip="Convertio"/>
                <Shortcut thumbnail='./img/icon/canva.png' bgimage="linear-gradient(to right bottom, #01c2cc, #6722c7)" href="https://www.canva.com" icon tooltip="Canva"/>
                <Shortcut thumbnail='./img/icon/audo.png' bgcolor="#222" href="https://audo.ai" icon tooltip="Audo"/>
            </ShortcutGrid>

            <ShortcutGrid label="Sources / Material">
                <Shortcut thumbnail='./img/icon/pinterest.png' bgimage="linear-gradient(to right, #a00 70px, #e00 100%)" href="https://www.pinterest.com" icon tooltip="Pinterest"/>
                <Shortcut thumbnail='./img/icon/htmlcolorcode.png' bgcolor="#f8f8ff" href="https://htmlcolorcodes.com" icon tooltip="HTML Color Codes"/>
                <Shortcut thumbnail='./img/icon/colorsupply.png' bgcolor="#f8f8ff" href="https://colorsupplyyy.com/app" icon tooltip="Color Supply"/>
                <Shortcut thumbnail='./img/icon/bootstrap5_icon.png' bgimage="url('./img/icon/bg/bootstrap5_icon_bg.jpg')" href="https://icons.getbootstrap.com" icon tooltip="Bootstrap5 Icon"/>
                <Shortcut thumbnail='./img/icon/colorhunt.png' bgcolor="#f8f8ff" href="https://colorhunt.co" icon tooltip="Color Hunt"/>
                <Shortcut internalThumbnail bgcolor="#0e2a47" href="https://bgjar.com" icon tooltip="BGJar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 100 100">
                        <path 
                            d="M 30.5 9.811 A 2.5 2.5 90 0 0 28 12.311 L 28 22.311 A 2.5 2.5 90 0 0 30.5 24.811 L 33 24.811 L 33 29.889 C 27.4415 30.284 23 34.9085 23 40.563 L 23 79.069 C 23 84.981 27.8395 89.811 33.752 89.811 L 67.248 89.811 C 73.1605 89.811 78 84.981 78 79.069 L 78 40.563 C 78 34.9085 73.5585 30.2855 68 29.889 L 68 24.811 L 70.5 24.811 A 2.5 2.5 90 0 0 73 22.311 L 73 12.311 A 2.5 2.5 90 0 0 70.5 9.811 L 30.5 9.811 Z M 33 14.811 L 68 14.811 L 68 19.811 L 33 19.811 L 33 14.811 Z M 38 24.811 L 63 24.811 L 63 29.811 L 38 29.811 L 38 24.811 Z M 33.752 34.811 L 35.5 34.811 L 65.5 34.811 L 67.248 34.811 C 70.477 34.811 73 37.3345 73 40.563 L 73 79.069 C 73 82.2975 70.477 84.811 67.248 84.811 L 33.752 84.811 C 30.523 84.811 28 82.2975 28 79.069 L 28 40.563 C 28 37.3345 30.523 34.811 33.752 34.811 Z" 
                            fill="#7952b3"
                        />
                        <path 
                            fillRule="evenodd" 
                            fill="#7952b3"
                            d="M 61.35 45.1 A 3.15 3.15 90 1 0 61.35 51.4 A 3.15 3.15 90 0 0 61.35 45.1 Z M 56.1 48.25 A 5.25 5.25 90 1 1 57.3663 51.6688 L 43.2585 58.2208 A 5.2479 5.2479 90 0 1 43.2585 61.3792 L 57.3663 67.9312 A 5.25 5.25 90 1 1 56.3415 69.7708 L 42.2337 63.2188 A 5.25 5.25 90 1 1 42.2337 56.3812 L 56.3415 49.8292 A 5.25 5.25 90 0 1 56.1 48.25 Z M 38.25 56.65 A 3.15 3.15 90 1 0 38.25 62.95 A 3.15 3.15 90 0 0 38.25 56.65 Z M 61.35 68.2 A 3.15 3.15 90 1 0 61.35 74.5 A 3.15 3.15 90 0 0 61.35 68.2 Z"
                            />
                        <path d="M 61.35 45.1 A 3.15 3.15 90 1 0 61.35 51.4 A 3.15 3.15 90 0 0 61.35 45.1 Z" stroke="#fcd66f" fill="#fcd66f" />
                        <path d="M 38.25 56.65 A 3.15 3.15 90 1 0 38.25 62.95 A 3.15 3.15 90 0 0 38.25 56.65 Z" stroke="#34afaa" fill="#34afaa" />
                        <path d="M 61.35 68.2 A 3.15 3.15 90 1 0 61.35 74.5 A 3.15 3.15 90 0 0 61.35 68.2 Z" stroke="#e95c60" fill="#e95c60"/>
                    </svg>
                </Shortcut>
            </ShortcutGrid>

            <ShortcutGrid label="Workspace">
                <Shortcut thumbnail='./img/icon/github.png' bgcolor="#252525" href="https://github.com" icon tooltip="Github" thumbnailInvert/>
                <Shortcut thumbnail='./img/icon/leb2.png' bgcolor="#17b5be" href="https://www.leb2.org" icon tooltip="LEB2"/>
                <Shortcut thumbnail='./img/icon/google/doc.png' bgcolor="#f8f8ff" href="https://docs.google.com" icon tooltip="Docs"/>
                <Shortcut thumbnail='./img/icon/google/drive.png' bgcolor="#f8f8ff" href="https://drive.google.com" icon tooltip="Drive"/>
            </ShortcutGrid>

            <ShortcutGrid label="Other">
                <Shortcut thumbnail='./img/icon/netlify.png' bgcolor="#f8f8ff" href="https://app.netlify.com/" icon tooltip="Netlify"/>
                <Shortcut thumbnail='./img/icon/framermotion.png' bgcolor="#202020" href="https://www.framer.com/motion/" icon tooltip="Framer Motion"/>
                <Shortcut thumbnail='./img/icon/zerotier.png' bgcolor="#ffb354" href="https://my.zerotier.com" icon tooltip="Zero Tier"/>
                <Shortcut thumbnail='./img/icon/laibaht-ico.png' bgcolor="#336" href="./lazyFeature/laibaht/index.html" icon tooltip="Laibaht Link Converter" />
            </ShortcutGrid>

            {/* <ShortcutGrid type="wide" label="Pin">
                <Shortcut thumbnail='./img/icon/leb2.png' bgimage="linear-gradient(to right, #17b5be 70px, #24dae4 100%)" color="#fff" labelAlign="center" href="https://www.leb2.org">
                    <span style={{ fontSize: '1.2em' }}><b>LEB2</b></span>
                </Shortcut>
                <Shortcut thumbnail='./img/icon/github.png' bgcolor="#2a2a2a" color="#fff" labelAlign="center" href="https://github.com/6MA-606/2565-INT100-G2-09-99_Sathu" thumbnailInvert>
                    <span style={{ fontSize: '1.2em' }}><b>99_Sathu</b></span>
                </Shortcut>
            </ShortcutGrid> */}

            {/* <AudioPlayer /> */}
            {/* <RandomNumber /> */}

        </div>
    );
}
export default Playground;