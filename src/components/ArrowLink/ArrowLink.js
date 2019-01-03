import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'carbon-components-react';
import { ArrowRight16 } from '@carbon/icons-react';

export default class ArrowLink extends React.Component {
  static propTypes = {
    /**
   * adds arrow icon to link, default is true, can set to false for inline links
   */
    arrow: PropTypes.string,
    /**
   * Link text, default is "View more"
   */
    label: PropTypes.string,
    /**
   * url path for link
   */
    href: PropTypes.string,
  };

  render() {
    const {
      arrow,
      href,
      label,
    } = this.props;

    const classNames = classnames({
      'arrow--link-container': arrow === 'true',
      'arrow--link-no_arrow': arrow === 'false',
    });

    return (
      <div className={classNames}>
        <Link href={href}>{label}</Link>
	      <ArrowRight16/>
      </div>
    );
  }
}

ArrowLink.defaultProps = {
  arrow: 'true',
  label: 'View more',
}
