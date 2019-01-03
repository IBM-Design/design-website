import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'carbon-components-react';
import { ArrowRight16 } from '@carbon/icons-react';
import { ArrowUpRight20 } from '@carbon/icons-react';

export default class ArrowLink extends React.Component {
  static propTypes = {
    /**
   * adds arrow icon to link, default is true, can set to false for inline links
   */
    arrow: PropTypes.string,
    /**
   * if true = uses ArrowRight16, if fault uses ArrowUpRight20, default = true
   */
    horizontal: PropTypes.string,
    /**
   * Link text, default is "View more"
   */
    label: PropTypes.string,
    /**
   * url path for link
   */
    href: PropTypes.string,
    /**
   * aligns items left or right, default = left
   */
    justify: PropTypes.string,
  };

  render() {
    const {
      arrow,
      horizontal,
      href,
      label,
      justify,
    } = this.props;

    const classNames = classnames({
      'arrow--link-container': arrow === 'true',
      'arrow--link-no_arrow': arrow === 'false',
      'arrow--link-justify_right': arrow === 'true' && justify === 'right',
    });

    return (
      <div className={classNames}>
        <Link href={href}>{label}</Link>
        { horizontal === 'true' ?
          (<ArrowRight16/>) :
          (<ArrowUpRight20 className='arrow--link-up_right_arrow'/>)}
      </div>
    );
  }
}

ArrowLink.defaultProps = {
  arrow: 'true',
  label: 'View more',
  horizontal: 'true',
  justify: 'left'
}
