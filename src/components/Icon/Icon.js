import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ArrowRight16, ArrowDown32, ArrowUpRight20 } from '@carbon/icons-react';

export default class Icon extends React.Component {
  static propTypes = {
    /**
   * defines which icon to use, options:
   "ArrowRight16" - default
   "ArrowUpRight20"
   "ArrowDown32"
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
    const {
      name,
      color,
      inline,
      align
    } = this.props;

    const classNames = classnames({
      'icon--black': color === 'black',
      'icon--blue': color === 'blue',
      'icon--white': color === 'white',
      'icon--inline': inline === 'true',
      'icon--right': align === 'right' && inline !== 'true',
      'icon--left': align === 'left' && inline !== 'true',
      'icon--inline up-right': inline === 'true' && name === 'ArrowUpRight20',
    });

    return (
      <div className={classNames}>
        {name === 'ArrowDown32' ? (
          <ArrowDown32 className='icon--down32'/>
        ) : null}
        {name === 'ArrowUpRight20' ? (
          <ArrowUpRight20 className='icon--upright20'/>
        ) : null}
        {name === 'ArrowRight16' ? (
          <ArrowRight16 className='icon--right16'/>
        ) : null}
      </div>
    );
  }
}

Icon.defaultProps = {
  color: 'black',
  name: 'ArrowRight16',
  inline: 'false',
  align: 'left'
}
