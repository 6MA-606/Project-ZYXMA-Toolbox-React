import aboutme from './aboutme.module.css'
// import moment from 'moment';

function AboutMe() {

    return (
        // <div id="AboutMe" className={ styles.AboutMe }>
        //     <div className={ styles.profileBox }>
        //         <div style={{ display: 'flex' }}>
        //             <img src="./img/general/me.jpg" alt="My img didn&#39;t load." className={ styles.img }/>
        //             <div style={{ display: 'flex', flexDirection: 'column' }}>
        //                 <div className={ styles.profile_1 }>
        //                     Sittha Manittayakul<br />
        //                     Age: {((moment("20040114", "YYYYMMDD").fromNow()).split(' '))[0] - 1}<br />
        //                 </div>
        //                 <div className={ styles.profile_2 }>
        //                     Contact: xxx-xxx-xxx
        //                 </div>
        //             </div>
        //         </div>
        //         <div className={ styles.motiveBox }>
        //             <div className={ styles.motive_1 }>
        //                 motive_1    
        //             </div>
        //             <div className={ styles.motive_2 }>
        //                 motive_2    
        //             </div>
        //         </div>
        //     </div>
        //     <div className={ styles.bioBox }>
        //         Bio
        //     </div>
        // </div>
        <div className={ aboutme.flexContainer }>
            <div className={ aboutme.flexLayer1_1 }>
                <div className={ aboutme.flexLayer2_1 }>
                    <div className={ aboutme.flexLayer3_1 }>
                        {/* My Picture */}
                        {/* <img src='./img/general/me.jpg' alt='me.jpg' /> */}
                    </div>
                    <div className={ aboutme.flexLayer3_2 }>
                        <div className={ aboutme.flexLayer4_1 }>
                            {/* My Info */}
                        </div>
                        <div className={ aboutme.flexLayer4_2 }>
                            {/* My Contact */}
                        </div>
                    </div>
                </div>
                <div className={ aboutme.flexLayer2_2 }>
                    <div className={ aboutme.flexLayer3_3 }>
                        {/* My Skill */}
                    </div>
                    <div className={ aboutme.flexLayer3_4 }>
                        {/* My Motive */}
                    </div>
                </div>
            </div>
            <div className={ aboutme.flexLayer1_2 }>
                {/* Bio | Personality */}
            </div>
        </div>
    );
}

export default AboutMe;