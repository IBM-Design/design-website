import React from 'react';

export class h1 extends React.Component {
  render() {
    return <h1 className="page-h1">{this.props.children}</h1>;
  }
}

export class h2 extends React.Component {
  render() {
    const hash =
      typeof this.props.children[0] !== 'string'
        ? undefined
        : this.props.children[0]
            .replace(/[:&]/g, '')
            .toLowerCase()
            .split(' ')
            .join('-');
    return (
      <h2 className="page-h2" id={hash}>
        {this.props.children}
      </h2>
    );
  }
}

export class h3 extends React.Component {
  render() {
    const hash =
      typeof this.props.children[0] !== 'string'
        ? undefined
        : this.props.children[0]
            .replace(/[:&]/g, '')
            .toLowerCase()
            .split(' ')
            .join('-');
    return (
      <h3 className="page-h3" id={hash}>
        {this.props.children}
      </h3>
    );
  }
}

export class h4 extends React.Component {
  render() {
    const hash =
      typeof this.props.children[0] !== 'string'
        ? undefined
        : this.props.children[0]
            .replace(/[:&]/g, '')
            .toLowerCase()
            .split(' ')
            .join('-');

    return (
      <h4 className="page-h4" id={hash}>
        {this.props.children}
      </h4>
    );
  }
}

export class h5 extends React.Component {
  render() {
    return <h5 className="page-h5">{this.props.children}</h5>;
  }
}

export class ul extends React.Component {
  render() {
    return <ul className="page-ul">{this.props.children}</ul>;
  }
}

export class ol extends React.Component {
  render() {
    return <ol className="page-ol">{this.props.children}</ol>;
  }
}

export class AnchorLinks extends React.Component {
  render() {
    return <div className="anchor-links">{this.props.children}</div>;
  }
}
