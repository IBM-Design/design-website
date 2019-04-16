import React from 'react';
import PropTypes from 'prop-types';
import { Play32 } from '@carbon/icons-react';
import Player from '@vimeo/player';
import classnames from 'classnames';

const FIRST_VIDEO_ID = 329866992;
const SECOND_VIDEO_ID = 304672438;

export default class Video extends React.Component {
  constructor(props) {
    super(props);

    this.handlePlaySecondVideo = this.handlePlaySecondVideo.bind(this);
  }

  state = {
    isVideoWrapperActive: false,
  };

  componentDidMount() {
    const iframe = document.querySelector('#homepage-video');
    this.player = new Player(iframe);
    this.player.on('ended', this.onEnd);
    this.player.setLoop(false);
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.destroy();
      this.player = null;
    }
  }

  static propTypes = {
    /**
     * iframe
     */
    children: PropTypes.node,
  };

  // Play video on click or spacebar
  handlePlaySecondVideo = evt => {
    if ((evt.type === 'keydown' && evt.which === 32) || evt.type === 'click') {
      this.player.getVideoId().then(id => {
        if (id === FIRST_VIDEO_ID) {
          this.setState({ isVideoWrapperActive: true }, () => {
            this.player.loadVideo(SECOND_VIDEO_ID).then(() => {
              this.player.setLoop(false);
              this.player.setVolume(1);
              this.player.play();
            });
          });
        }
      });
    }
  };

  // Only re-starts if it's the end of the second video
  onEnd = () => {
    this.player.getVideoId().then(id => {
      if (id === SECOND_VIDEO_ID) {
        this.setState({ isVideoWrapperActive: false }, () => {
          this.player.loadVideo(FIRST_VIDEO_ID).then(() => {
            this.player.setLoop(false);
            this.player.setVolume(0);
          });
        });
      }
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
      ' active': this.state.isVideoWrapperActive,
    });

    return (
      <div
        className={videoWrapperClassName}
        onClick={this.handlePlaySecondVideo}
        onKeyDown={this.handlePlaySecondVideo}
        tabindex="0">
        {children}
        <div className="ibm--video-overlay" />
        <div className="ibm--video-controls">{svgPlayBtn}</div>
      </div>
    );
  }
}
