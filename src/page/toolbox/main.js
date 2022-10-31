import React from 'react';

import styles from './toolbox.module.css';
import $ from 'jquery';
import HeaderText from '../../tools/headertext/main';
import QRCode from '../../tools/qrcode/main';
import AboutMe from '../../abouts/main';
import Playground from '../../tools/playground/main';
import ElementBox from '../../tools/box/main';
import { SideNav, SideNavBth } from '../../components/sidenav/main';
import { Icon } from '../../components/icon/main';
import { DarkModeSwitch } from '../../components/widget/darkModeSwitch/main';


class Toolbox extends React.Component {

    constructor(props) {
        super(props);

        const { lightModeBG, darkModeBG, lightText, darkText} = props;

        this.state = {
            header: '',
            content: '',
            page: localStorage.getItem('page'),
            lightModeBG: !(lightModeBG === '' || lightModeBG === undefined) ? lightModeBG : "linear-gradient(135deg, #fefefe, #fff)",
            darkModeBG: !(darkModeBG === '' || darkModeBG === undefined) ? darkModeBG : "linear-gradient(135deg, #202020, #353535)",
            // bg: '',
            lightText: !(lightText === '' || lightText === undefined) ? lightText : "#252525",
            darkText: !(darkText === '' || darkText === undefined) ? darkText : "#f8f8ff",
            textColor: ''
        }

        this.darkModeUpdate = this.darkModeUpdate.bind(this);
    }

    darkModeUpdate() {
        if ($('#darkMode').prop('checked') || localStorage.getItem('darkMode') === '1') {
            // this.setState({ bg: this.state.darkModeBG })
            $('body').css('background', this.state.darkModeBG);
            this.setState({ textColor: this.state.darkText })
        } else {
            // this.setState({ bg: this.state.lightModeBG })
            $('body').css('background', this.state.lightModeBG);
            this.setState({ textColor: this.state.lightText })
        }
    }

    componentDidMount() {
        switch(this.state.page) {
            case '101':
                this.setState({ header: <span>QRCode Generator</span> });
                this.setState({ content: <QRCode /> });
                break;
            case '102':
                this.setState({ header: <span>Element Box Generator</span> });
                this.setState({ content: <ElementBox /> });
                break;
            case '103':
                this.setState({ header: <span>Playground</span> });
                this.setState({ content: <Playground /> });
                break;
            case '600':
                this.setState({ header: <span>About me</span> });
                this.setState({ content: <AboutMe /> });
                break;
            default:
                this.setState({ header: <span>Header Text Generator</span> });
                this.setState({ content: <HeaderText /> });
        }

        this.darkModeUpdate();
    }
    

    render() {

        // Navigator button linker
        $(() => { 
            $('.home_btn').on('click', () => {
                window.location = "../";
            });

            $('.list_1').on('click', () => {
                this.setState({ header: <span>Header Text Generator</span> });
                this.setState({ content: <HeaderText /> });
                localStorage.setItem('page', '100');
            });

            $('.list_2').on('click', () => {
                this.setState({ header: <span>QRCode Generator</span> });
                this.setState({ content: <QRCode /> });
                localStorage.setItem('page', '101');
            });

            $('.list_3').on('click', () => {
                this.setState({ header: <span>Element Box Generator</span> });
                this.setState({ content: <ElementBox /> });
                localStorage.setItem('page', '102');
            });

            $('.list_4').on('click', () => {
                this.setState({ header: <span>Playground</span> });
                this.setState({ content: <Playground /> });
                localStorage.setItem('page', '103');
            });

            $('.about_me').on('click', () => {
                this.setState({ header: <span>About me</span> });
                this.setState({ content: <AboutMe /> });
                localStorage.setItem('page', '600');
            });

            $('#darkMode').on('change', () => {
                this.darkModeUpdate();
            });
        });
        

        return (
            <div>
                <div className={ styles.gridContainer } id="toolbox">
                    <div className={ styles.gridItem_1 }>
                        <SideNav lightModeBG="#fefefe" darkModeBG="#43446a">
                            <SideNavBth main className="home_btn">
                                <Icon variant="house" lightModeColor="#8000ff" darkModeColor="#00efaa"/>
                            </SideNavBth>
                            <SideNavBth className="list_1">
                                <Icon variant="textarea" lightModeColor="#303030" darkModeColor="#f8f8ff"/>
                            </SideNavBth>
                            <SideNavBth className="list_2">
                                <Icon variant="qr-code" lightModeColor="#303030" darkModeColor="#f8f8ff" />
                            </SideNavBth>
                            <SideNavBth className="list_4">
                                <Icon variant="joystick" lightModeColor="#303030" darkModeColor="#f8f8ff"/>
                            </SideNavBth>
                        </SideNav>
                    </div>
                    <div className={ styles.gridItem_2 } style={{ color: this.state.textColor }}>
                        { this.state.header }
                        <DarkModeSwitch />
                    </div>
                    <div className={ styles.gridItem_3 }>
                        { this.state.content }
                    </div>
                </div>
            </div>
    );
}
}
    
export default Toolbox;
