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


class Toolbox extends React.Component {

    constructor() {
        super();
        this.state = {
            header: '',
            content: '',
            page: localStorage.getItem('page')
        }

        this.sideNavClick = this.sideNavClick.bind(this);
    }

    sideNavClick() {
        
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
        });
        

        return (
            <div>
                <div className={ styles.gridContainer }>
                    <div className={ styles.gridItem_1 }>
                        <SideNav>
                            <SideNavBth main className="home_btn">
                                <Icon variant="house" color="#8000ff" />
                            </SideNavBth>
                            <SideNavBth className="list_1">
                                <Icon variant="textarea" color="#303030" />
                            </SideNavBth>
                            <SideNavBth className="list_2">
                                <Icon variant="qr-code" color="#303030" />
                            </SideNavBth>
                            <SideNavBth className="list_4">
                                <Icon variant="joystick" color="#303030" />
                            </SideNavBth>
                        </SideNav>
                    </div>
                    <div className={ styles.gridItem_2 }>
                        { this.state.header } 
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
