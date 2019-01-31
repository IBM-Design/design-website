import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Fade from 'react-reveal/Fade';

export class p extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    size: PropTypes.string,
  };

  render() {
    const { children, size } = this.props;

    const classNames = classnames({
      'page-p': size !== 'xl',
      'page-p--sm': size === 'sm',
      'page-p--md': size === 'md',
      'page-p--lg': size === 'lg',
      'page-p--xl': size === 'xl',
      'bx--type-expressive-paragraph-01': size === 'xl',
    });

    return <p className={classNames}>{children}</p>;
  }
}

export class a extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    tabindex: PropTypes.string,
    rel: PropTypes.string,
  };

  render() {
    const { children, className, id, href, target, tabindex, rel } = this.props;

    return (
      <a
        href={href}
        id={id}
        target={target}
        rel={rel}
        tabindex={tabindex}
        className={`bx--link ${className}`}>
        {children}
      </a>
    );
  }
}

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
      <div>
        <h2 className="page-h2 bx--type-expressive-paragraph-01" id={hash}>
          {this.props.children}
        </h2>
      </div>
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
