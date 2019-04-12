import React from 'react';
import PropTypes from 'prop-types';
import { Play32 } from '@carbon/icons-react';
import Player from '@vimeo/player';
import classnames from 'classnames';

export default class Video extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  state = {};

  componentDidMount() {
    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
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

  onClick = evt => {
    evt.preventDefault;
    const video = document.querySelector('.ibm--video-wrapper');
    const iframe = video.querySelector('iframe');
    const player = new Player(iframe);
    this.setState(
      {
        isVideoWrapperActive: true,
      },
      () => {
        player.setLoop(false);
        player.setCurrentTime(0);
        player.setVolume(1);
        player.play();
      }
    );
  };

  onEnd = () => {
    const video = document.querySelector('.active');
    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    player.loadVideo(304672438).then(() => {
      player.setLoop(true).then(() => {
        this.setState(
          {
            isVideoWrapperActive: false,
          },
          () => {
            player.setVolume(0);
          }
        );
      });
    });
  };

  render() {
    const { children } = this.props;
    const svgPlayBtn = (
      <svg
        className="ibm--video-play-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 91 91">
        <defs>
          <clipPath id="clip-path" transform="translate(-610 -1009)">
            <circle class="cls-1" cx="655.5" cy="1054.5" r="36" />
          </clipPath>
          <clipPath id="clip-path-2" transform="translate(-610 -1009)">
            <rect class="cls-1" width="1312" height="2638" />
          </clipPath>
          <clipPath id="clip-path-3" transform="translate(-610 -1009)">
            <rect class="cls-1" x="615" y="1014" width="81" height="81" />
          </clipPath>
          <clipPath id="clip-path-5" transform="translate(-610 -1009)">
            <rect class="cls-1" x="619" y="1018" width="73" height="73" />
          </clipPath>
          <clipPath id="clip-path-6" transform="translate(-610 -1009)">
            <path
              class="cls-2"
              d="M648.5,1042.63a1,1,0,0,0-.5.87v22a1,1,0,0,0,1,1,1,1,0,0,0,.5-.14l19-11a1,1,0,0,0,0-1.73l-19-11a1,1,0,0,0-.5-.13A1,1,0,0,0,648.5,1042.63Z"
            />
          </clipPath>
          <clipPath id="clip-path-8" transform="translate(-610 -1009)">
            <rect class="cls-1" x="642" y="1037" width="32" height="35" />
          </clipPath>
          <clipPath id="clip-path-9" transform="translate(-610 -1009)">
            <rect class="cls-1" x="643" y="1037.5" width="31" height="34" />
          </clipPath>
          <clipPath id="clip-path-10" transform="translate(-610 -1009)">
            <rect class="cls-1" x="647" y="1042" width="22" height="25" />
          </clipPath>
          <clipPath id="clip-path-11" transform="translate(-610 -1009)">
            <rect class="cls-1" x="642" y="1038.5" width="32" height="32" />
          </clipPath>
        </defs>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <g class="cls-3">
              <g class="cls-4">
                <g class="cls-5">
                  <g class="cls-6">
                    <g class="cls-6">
                      <g class="cls-7">
                        <rect class="cls-8" width="91" height="91" />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g class="cls-9">
              <g class="cls-4">
                <g class="cls-5">
                  <g class="cls-10">
                    <g class="cls-11">
                      <g class="cls-12">
                        <rect x="28" y="23.5" width="41" height="44" />
                      </g>
                    </g>
                    <g class="cls-13">
                      <g class="cls-12">
                        <rect
                          class="cls-14"
                          x="27"
                          y="24.5"
                          width="42"
                          height="42"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
    const videoWrapperClassName = classnames('ibm--video-wrapper', {
      '  active': this.state.isVideoWrapperActive,
    });

    return (
      <div className={videoWrapperClassName} onClick={this.onClick}>
        {children}
        <div className="ibm--video-overlay" />
        <div className="ibm--video-controls">{svgPlayBtn}</div>
      </div>
    );
  }
}
