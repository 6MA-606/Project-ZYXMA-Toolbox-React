// import { render } from '@testing-library/react';
// import $ from 'jquery';
import React from 'react';
import player from './player.module.css';

class AudioPlayer extends React.Component {
    
    constructor(props) {
        super(props);
        const { src } = props;

        this.state = {
            src: src,
            min: 0,
            max: 10000,
            value: 0
        }
    }

    render() {
        // let audio = $('#test');
        // this.state.value = $('#test')[0].currentTime;

        return (
            <div>
                <audio controls id='test'>
                    <source src="./audios/gray_umbrella.mp3" type="audio/mpeg"/>
                </audio>
                <div className={ player.playBtn }></div>
                <div className={ player.stopBtn }></div>
                <input type="range" min={ this.state.min } max={ this.state.max } onChange={ this.change } value={ this.state.value } />
            </div>
        );
    }
}

export default AudioPlayer;