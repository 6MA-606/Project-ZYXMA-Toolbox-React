// import Shortcut from "../components/shortcut";
import styles from "./landingpage.module.css";
// import $ from "jquery";
// import { useState } from "react";
import Portal from "../components/widget/portal/main";
import NavButton from "../components/widget/navButton/navButton";
import { SocialButton } from "../components/widget/socialButton/main";

function LandingPage() {

    return (
        <div className={ styles.page } id="top">
            <div className={ styles.section_1 }>
                <div className={ styles.navbar }>
                    <div className={ styles.left }>
                        <NavButton href="#top">ZYXMA</NavButton>
                    </div>
                    <div className={ styles.center }>
                        <NavButton href="#project">Project</NavButton>
                    </div>
                    <div className={ styles.right }>TEST</div>
                </div>
                <div className={ styles.content }>
                    <div className={ styles.bgText }>
                        <div>ZYXMA</div>
                    </div>
                    <div className={ styles.myPic }>
                        <img src="./img/landingPage/me-landingPage.png" alt="landing" />
                    </div>
                    <div className={ styles.mySocial }>
                        <SocialButton bgcolor="#4f417a" variant="facebook" href="https://www.facebook.com/sittha.manittayakul/" target="_blank" />
                        <SocialButton bgcolor="#4f417a" variant="instagram" href="https://www.instagram.com/sittha.m_/" target="_blank" />
                        <SocialButton bgcolor="#4f417a" variant="github" href="https://github.com/6MA-606" target="_blank" />
                    </div>
                </div>
            </div>
            <div className={ styles.section_2 } id="project">
                <Portal tooltip="ZYXMA-Toolbox" bg="linear-gradient(135deg, #3b3b3b, #2d2d2d)" bgHover="url('./img/portal/bgHover/zyxma-toolbox.png') #f8f8ff" goto="zyxma-toolbox">
                    <div style={{ color: "#fff", borderBottom: "2px solid #fff" }}>ZYXMA-Toolbox</div>
                    <img src="./img/icon/zyxma-toolbox-mini.png" alt="zyxma-toolbox-mini" width="150px"/>
                </Portal>
            </div>
        </div>
    );

}

export default LandingPage;