import Shortcut from '../../components/shortcut';
// import AudioPlayer from '../../prototype/audioPlayer/main';
import { MoonPhase, MoonInfo } from '../../prototype/moonphase/main';
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
                <Shortcut thumbnail='./img/icon/leb2.png' bgcolor="#17b5be" color="#fff" labelAlign="center" href="https://www.leb2.org">
                    <span style={{fontSize: '1.2em', fontWidth: ''}}>LEB2</span>
                </Shortcut>
                <Shortcut thumbnail='./img/icon/github.png' bgcolor="#2a2a2a" color="#fff" labelAlign="center" href="https://github.com/6MA-606/2565-INT100-G2-09-99_Sathu" thumbnailInvert>
                    <span style={{fontSize: '1.2em', fontWidth: ''}}>99_Sathu</span>
                </Shortcut>
                <Shortcut thumbnail='./img/icon/pinterest.png' bgcolor="#a00" color="#fff" labelAlign="center" href="https://www.pinterest.com">
                    <span style={{fontSize: '1.2em', fontWidth: ''}}>Pinterest</span>
                </Shortcut>
            </div>

            {/* <AudioPlayer /> */}

        </div>
    );
}
export default Playground;