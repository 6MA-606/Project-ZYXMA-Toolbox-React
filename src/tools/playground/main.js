import Shortcut from '../../components/shortcut';
// import AudioPlayer from '../../prototype/audioPlayer/main';
import { MoonPhase, MoonInfo } from '../../prototype/moonphase/main';
import RandomNumber from '../../prototype/randomNumber/main';
import playground from './playground.module.css';

function Playground() {
    
    return (
        <div id="Playground" className={ playground.container }>
            <div className={ playground.widget_1 }>
                <div className={ playground.inner }>
                    <span className={ playground.header }>
                        <b>Your moon today</b>
                    </span>
                    <div className={ playground.content }>
                        <MoonPhase />
                    </div>
                    <span className={ playground.subContent }>
                        <MoonInfo luminated />% illuminated
                    </span>
                    {/* <span className={ playground.subContent }>
                        Last full moon is on <MoonInfo nextFullmoon />
                    </span> */}
                </div>
                <div className={ playground.body }>
                    Last update { (Date().split(' '))[4] }
                </div>
            </div>

            {/* <div className={ playground.widget_2 }>
                <div className={ playground.inner }>
                    <span className={ playground.header }>
                        <b>My Shortcut</b>
                    </span>
                    <div className={ playground.content }>
                        <img src="https://app.leb2.org/images/logo.png" width="50px" height="auto" alt='leb2'/>
                        <a href='https://app.leb2.org/class' target="_blank" rel="noreferrer">LEB2</a>
                    </div>
                    <span className={ playground.subContent }>
                  
                    </span>
                </div>
                <div className={ playground.body }>
                    
                </div>
            </div> */}
            
            <div className={ playground.widget_2 }>
                <Shortcut thumbnail='./img/icon/leb2.png' bgimage="linear-gradient(to right, #17b5be 70px, #24dae4 100%)" color="#fff" labelAlign="center" href="https://www.leb2.org">
                    <span style={{ fontSize: '1.2em' }}><b>LEB2</b></span>
                </Shortcut>
                <Shortcut thumbnail='./img/icon/github.png' bgcolor="#2a2a2a" color="#fff" labelAlign="center" href="https://github.com/6MA-606/2565-INT100-G2-09-99_Sathu" thumbnailInvert>
                    <span style={{ fontSize: '1.2em' }}><b>99_Sathu</b></span>
                </Shortcut>
                <Shortcut thumbnail='./img/icon/pinterest.png' bgimage="linear-gradient(to right, #a00 70px, #e00 100%)" color="#fff" labelAlign="center" href="https://www.pinterest.com">
                    <span style={{ fontSize: '1.2em' }}><b>Pinterest</b></span>
                </Shortcut>
            </div>

            <div className={ playground.widget_3 }>
                <div>
                    <Shortcut thumbnail='./img/icon/spotify.png' bgcolor="#222" href="https://open.spotify.com/search" icon></Shortcut>
                    <Shortcut thumbnail='./img/icon/ig.png' bgimage="url('./img/icon/bg/ig_bg.jpg')" href="https://www.instagram.com" thumbnailInvert icon></Shortcut>
                    <Shortcut thumbnail='./img/icon/facebook.png' bgcolor="#05a" href="https://www.facebook.com" icon></Shortcut>
                </div>
                <div>
                    <Shortcut thumbnail='./img/icon/youtube.png' bgcolor="#222" href="https://www.youtube.com" icon></Shortcut>
                    <Shortcut thumbnail='./img/icon/ilovepdf.png' bgcolor="#f8f8ff" href="https://www.ilovepdf.com" icon></Shortcut>
                    <Shortcut thumbnail='./img/icon/convertio.png' bgcolor="#f8f8ff" href="https://convertio.co" icon></Shortcut>
                </div>
                <div>
                    <Shortcut thumbnail='./img/icon/canva.png' bgimage="linear-gradient(to right bottom, #01c2cc, #6722c7)" href="https://www.canva.com" icon></Shortcut>
                    {/* <Shortcut thumbnail='./img/icon/pinterest.png' bgcolor="#a00" color="#fff" href="https://www.pinterest.com" icon></Shortcut>
                    <Shortcut thumbnail='./img/icon/pinterest.png' bgcolor="#a00" color="#fff" href="https://www.pinterest.com" icon></Shortcut> */}
                </div>
            </div>
            {/* <AudioPlayer /> */}
            <RandomNumber />

        </div>
    );
}
export default Playground;