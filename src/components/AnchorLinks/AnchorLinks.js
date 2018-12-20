import React from 'react';

export default class AnchorLinks extends React.Component {
  render() {
    return <div className="anchor-links">{this.props.children}</div>;
  }
}
