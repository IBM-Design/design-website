import React from 'react';
import PropTypes from 'prop-types';
import { Play32 } from '@carbon/icons-react';
import Player from '@vimeo/player';

export default class Video extends React.Component {
  componentDidMount() {
    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    player.setColor('#0062ff');
    player.setLoop(false);
    player.on('ended', this.onEnd);
    player.on('pause', this.mitigateKeyboard);
  }

  static propTypes = {
    /**
     * for slide images
     */
    children: PropTypes.node,
  };

  mitigateKeyboard = () => {
    const video = document.querySelector('.ibm--video-wrapper');
    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    if (!video.classList.contains('active')) {
      this.onClick();
    } else {
      player.pause();
    }
  };

  onClick = () => {
    const video = document.querySelector('.ibm--video-wrapper');
    const iframe = video.querySelector('iframe');
    const player = new Player(iframe);
    video.classList.add('active');
    player.setCurrentTime(0);
    player.setVolume(1);
    player.play();
  };

  onKey = () => {
    const video = document.querySelector('.ibm--video-wrapper');
    const iframe = video.querySelector('iframe');
    const player = new Player(iframe);
    video.classList.add('active');
    player.setCurrentTime(0);
    player.setVolume(1);
    player.play();
  };

  onEnd = () => {
    const video = document.querySelector('.ibm--video-wrapper');
    video.classList.remove('active');
    const iframe = video.querySelector('iframe');
    const player = new Player(iframe);
    player.setCurrentTime(0);
    player.setVolume(0);
    player.loadVideo(304672438);
  };

  render() {
    const { children } = this.props;

    return (
      <div className="ibm--video-wrapper" onClick={this.onClick}>
        {children}
        <div className="ibm--video-overlay" />
        <div className="ibm--video-controls" />
      </div>
    );
  }
}
