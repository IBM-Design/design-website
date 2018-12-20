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
    /**
   * Specify the col width at small breakpoint, default is 4
   */
    sm: PropTypes.string,
    /**
   * Specify the col width at medium breakpoint, default is 8
   */
    md: PropTypes.string,
    /**
   * Specify the col width at large breakpoint, default is 16
   */
    lg: PropTypes.string,
    /**
   * Specify the col offset at large breakpoint, default is 0
   */
    offset_lg: PropTypes.string,
  };

  static defaultProps = {
    sm: '4',
    md: '8',
    lg: '16',
    offset_lg: '0'
  };

  render() {
    const { children, sm, md, lg, offset_lg } = this.props;

    const classNames = classnames(
      `ibm--col-lg-${lg}`,
      `ibm--col-md-${md}`,
      `ibm--col-sm-${sm}`,
      `ibm--offset-lg-${offset_lg}`,
    );

    return <div className={classNames}>{children}</div>;
  }
}
