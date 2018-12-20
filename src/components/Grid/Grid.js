import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export class Grid extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    background: PropTypes.string,
  };

  render() {
    const { children, background } = this.props;

    const classNames = classnames({
      background: true,
      'background--black': background === 'black',
      'background--white': background === 'white',
      'background--gray-10': background === 'gray-10',
      'background--gray-20': background === 'gray-20',
    });

    return (
      <div className={classNames}>
        <div className="ibm--grid">
          <div className="ibm--row">{children}</div>
        </div>
      </div>
    );
  }
}

export class Column extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    sm: PropTypes.string,
    md: PropTypes.string,
    lg: PropTypes.string,
  };

  render() {
    const { children, sm, md, lg } = this.props;

    const classNames = classnames(
      `ibm--col-lg-${lg}`,
      `ibm--col-md-${md}`,
      `ibm--col-sm-${sm}`
    );

    return <div className={classNames}>{children}</div>;
  }
}
