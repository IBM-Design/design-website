import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  ArrowRight24,
  ArrowUpRight24,
  ArrowUpRight20,
  PlexArrowDown,
  PlexArrowLeft,
} from '@carbon/icons-react';
import Fade from 'react-reveal/Fade';

export default class Icon extends React.Component {
  static propTypes = {
    /**
   * defines which icon to use, options:
   "ArrowRight24" - default
   "ArrowUpRight24"
   "PlexArrowDown"
   "PlexArrowLeft"
   */
    name: PropTypes.string,
    /**
   * defines color of icon, default is black,
    other options = "blue" "white"
   */
    color: PropTypes.string,
    /**
     * adds class to display inline, default = false
     */
    inline: PropTypes.string,
    /**
     * accepts "right" or "left" to align icon
     */
    align: PropTypes.string,
  };

  render() {
    const { name, color, inline, align } = this.props;

    const classNames = classnames({
      'icon--black': color === 'black',
      'icon--blue': color === 'blue',
      'icon--white': color === 'white',
      'icon--inline': inline === 'true',
      'icon--right': align === 'right' && inline !== 'true',
      'icon--inline up-right': inline === 'true' && name === 'ArrowUpRight24',
    });

    return (
      <Fade bottom distance="100%">
        <span className={classNames}>
          {name === 'PlexArrowDown' ? (
            <span className="icon--arrowDown">↓</span>
          ) : null}
          {name === 'PlexArrowLeft' ? (
            <span className="icon--arrowLeft icon--blue icon--inline left">
              ←
            </span>
          ) : null}
          {name === 'ArrowUpRight24' ? (
            <ArrowUpRight24 className="icon--upright24" />
          ) : null}
          {name === 'ArrowUpRight20' ? (
            <ArrowUpRight20 className="icon--upright20" />
          ) : null}
          {name === 'ArrowLeft24' ? (
            <ArrowLeft24 className="icon--left24" />
          ) : null}
        </span>
      </Fade>
    );
  }
}

Icon.defaultProps = {
  color: 'black',
  name: 'ArrowRight24',
  inline: 'false',
  align: 'left',
};
