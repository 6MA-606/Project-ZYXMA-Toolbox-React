import Shortcut from "../components/shortcut";
import styles from "./landingpage.module.css";
import $ from "jquery";
import { useState } from "react";

function LandingPage() {

    const [style, setStyle] = useState({});
    const [content, setContent] = useState('');

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    $(function () {

        let warp = $("#warp");

        warp.on('click', async() => {
            setStyle({
                width: "100vw",
                height: "100vh",
                borderRadius: "0px",
                backgroundColor: "#f8f8ff",
                cursor: 'unset'
            });
            
            $('body').css('overflow', 'hidden');

            await delay( 1000 );

            window.location = '/zyxma-toolbox';
        });

        warp.on('mouseover', async() => {
            setStyle({
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            });
            setContent('');
        });
    });

    return (
        <div className={ styles.page }>
            <div className={ styles.section_1 }>
                <div className={ styles.inner }>
                    <div className={ styles.left }>
                        <img src="./img/landingPage/me-landingPage.png" alt="landing" height="100%"/>
                    </div>
                    <div className={ styles.right }>
                        <Shortcut thumbnail='./img/icon/github.png' bgcolor="#2a2a2aee" color="#fff" labelAlign="center" href="https://github.com/6MA-606/Project-ZYXMA-Toolbox-React" thumbnailInvert>
                            <span style={{ fontSize: '1.2em' }}><b>ZYXMA-Toolbox Repo</b></span>
                        </Shortcut>
                    </div>
                </div>
                <div className={ styles.logoText }>
                    ZYXMA
                </div>
            </div>
            <div className={ styles.section_2 }>
                <div id="warp" style={ style }>{ content }
                    <div></div>
                </div>
            </div>
        </div>
    );

}

export default LandingPage;