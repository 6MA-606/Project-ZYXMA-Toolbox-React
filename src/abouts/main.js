import styles from './styles.module.css'
import moment from 'moment';

function AboutMe() {

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