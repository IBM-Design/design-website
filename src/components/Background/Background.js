import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Background extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    color: PropTypes.string,
  };

  render() {
    const {
      children,
      color,
    } = this.props;

    const classNames = classnames({
      'background': true,
      'background--black': color === 'black',
      'background--white': color === 'white',
      'background--gray': color === 'gray',
    });

    return (
      <div className={classNames}>
        <div className="ibm--grid">
          {children}
        </div>
      </div>
    );
  }
}

