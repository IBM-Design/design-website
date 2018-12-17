import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBlock extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    text_one: PropTypes.string,
    text_two: PropTypes.string,
  };

  render() {
    const {
      children,
      text_one,
      text_two
    } = this.props;
    
    return (
      <div className="ibm--row">
        <div class="title-block ibm--col-lg-10">
          <h1 className="title-block__text">
            {text_one}
            {text_two ? (
              <span>{text_two}</span>
            ) : null}
          </h1>
          {children}
        </div>
      </div>
    );
  }
}
