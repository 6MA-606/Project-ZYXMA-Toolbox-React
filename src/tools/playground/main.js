import { MoonPhase, MoonInfo } from '../../prototype/moonphase/main';
import playground from './playground.module.css';

function Playground() {
    
    return (
        <div id="Playground">
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
                    <span className={ playground.subContent }>
                        Next full moon is on <MoonInfo nextFullmoon />
                    </span>
                </div>
                <div className={ playground.body }>
                    Last update { (Date().split(' '))[4] }
                </div>
            </div>
        </div>
    );
}
export default Playground;