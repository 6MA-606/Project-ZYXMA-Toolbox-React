import styles from './styles.module.css'
import '../tools/tools.css';
import moment from 'moment';
import $ from 'jquery';
import { useState } from 'react';

function AboutMe() {

    const [test,setTest] = useState('');

    $.get('https://www.fullmoonphase.com/asia/thailand/bangkok.htm').then(function (html) {
        // Success response
        let iWant = $(html).find('#moon-phase');
        const iWantArray = (iWant.text()).split('.');
        // let moonPercent = iWantArray[4]+ '.' + (iWantArray[5].split(' '))[0];
        let moonPercent = iWantArray[5]+ '.' + (iWantArray[6].split(' '))[0];;

        setTest( moonPercent );
    }, function () {
        // Error response
        setTest( 'Access denied' );
    });

    return (
        <div id="AboutMe" className="content-feature">
            <div>
                <div className={ styles.profileBox }>
                    <div>My Persona</div>
                    <div style={{ display: 'flex' }}>
                        <img src="./img/general/me.jpg" alt="My img didn&#39;t load." className={ styles.img }/>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ flex: '50%' }}>
                                Sittha Manittayakul<br />
                                Age: {((moment("20040114", "YYYYMMDD").fromNow()).split(' '))[0] - 1}<br />
                                Moon Percent Today: { test }
                            </div>
                            <div style={{ flex: '50%' }}>
                                Contact: xxx-xxx-xxx
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;