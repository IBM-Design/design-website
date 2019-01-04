import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button, Link } from 'carbon-components-react';
import { ArrowRight16, Launch20 } from '@carbon/icons-react';

export default class Tile extends React.Component {
  static propTypes = {
    /**
   * for tile images
   */
    children: PropTypes.node,
    /**
   * default=false, if true, large tiles will bleed at bottom
   */
    no_gutter: PropTypes.string,
    /**
   * specifies the version of tile component used.
   default=small, other types include "large" and "xlarge"
   */
    size: PropTypes.string,
    /**
   * only header for small tiles, first header for lg/xl tiles
   */
    title_one: PropTypes.string,
    /**
   * second header for lg/xl tiles
   */
    title_two: PropTypes.string,
    /**
   * description paragraph if needed
   */
    description: PropTypes.string,
    /**
   * string that sets hex value for background color, if not included, bg is transparent
   */
    background: PropTypes.string,
    /**
   * makes title 2 and description text white if bg is dark, default = false,
   */
    light: PropTypes.string,
    /**
   * Label for the clickable tile, default = "Learn more"
   */
    link_name: PropTypes.string,
    /**
   * href for the clickable tile
   */
    href: PropTypes.string,
    dark_tile: PropTypes.string,

  };

  render() {
    const {
      children,
      no_gutter,
      size,
      title_one,
      title_two,
      description,
      background,
      light,
      link_name,
      href,
      dark_tile,

    } = this.props;

    const classNames = classnames({
      'tile--sm': size === 'small',
      'tile--lg': size === 'large',
      'tile--xl': size === 'xlarge',
      'tile--no-gutter': no_gutter === 'true',
    });

    const titleClassNames = classnames({
      'title--sm': size === 'small',
      'title--lg': size === 'large' || size === 'xlarge',
      'text--light': light === 'true',
    });

    const titleTwoClassNames = classnames({
      'text--light': light === 'true',
      'title--two': title_two
    });

    const descClassName = classnames({
      'text--light': light === 'true',
    });

    const lgImgClassNames = classnames({
      'ibm--col-lg-8': size === 'large',
      'ibm--col-lg-16': size === 'xlarge',
      'img--lg': size === 'large' || size === 'xlarge',
    });

    return (
      <div className={classNames} style={{backgroundColor: background}}>
        { size === "small" ? (
          <div className='img--sm'>
            {children}
          </div>
        ) : null}
        <section className='tile--text-container ibm--col-lg-4'>
          <h1 className={titleClassNames}>{title_one}</h1>
          {title_two ? (
            <h1 className={titleTwoClassNames}>{title_two}</h1>
          ) : null}
          <p className={descClassName}>{description}</p>
        </section>
        { size !== "small" ? (
          <div className={lgImgClassNames}>
            {children}
          </div>
        ) : null}
      </div>
    );
  }
}

Tile.defaultProps = {
  size: 'small',
  no_gutter: 'false',
  light: 'false',
  link_name: 'Learn more',
  dark_tile: 'false',
}
