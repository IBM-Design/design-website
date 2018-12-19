import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBlock extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
  };

  render() {
    const {
      children,
      title
    } = this.props;

    return (
      <div className="tile--container ibm--row">
        <div className='ibm--col-lg-4'>
          <h3>{title}</h3>
        </div>
        <div className='small--tiles-container'>
          {children}
        </div>
      </div>
    );
  }
}
