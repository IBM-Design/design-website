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
   * default=false, if true, will include clickable tile
   */
    button: PropTypes.string,
    /**
   * url for clickable tile button
   */
    button_href: PropTypes.string,
    /**
   * specifies the version of tile component used.
   default=small, other types include "large" and "xlarge"
   */
    type: PropTypes.string,
    /**
   * only header for small tiles, first header for lg/xl tiles
   */
    tile_title_one: PropTypes.string,
    /**
   * second header for lg/xl tiles
   */
    tile_title_two: PropTypes.string,
    /**
   * description paragraph if needed
   */
    description: PropTypes.string,
    /**
   * only link in sm/lg tiles, first link of 3 in xl tiles
   */
    link_one: PropTypes.string,
    /**
   * 2 link of 3 in xl tiles
   */
    link_two: PropTypes.string,
    /**
   * 3 link of 3 in xl tiles
   */
    link_three: PropTypes.string,
    /**
   * link 1 href
   */
    href_one: PropTypes.string,
    /**
   * link 2 href
   */
    href_two: PropTypes.string,
    /**
   * link 3 href
   */
    href_three: PropTypes.string,
    /**
   * string that sets hex value for background color, if not included, bg is transparent
   */
    background: PropTypes.string,
    /**
   * makes title 2 and description text white if bg is dark, default = false,
   */ 
    light: PropTypes.string
  };

  render() {
    const {
      children,
      no_gutter,
      button,
      button_href,
      type,
      tile_title_one,
      tile_title_two,
      description,
      link_one,
      link_two,
      link_three,
      href_one,
      href_two,
      href_three,
      background,
      light,
    } = this.props;

    const classNames = classnames({
      'ibm--row': type === 'large' || type === 'xlarge',
      'tile--sm': type === 'small',
      'tile--lg': type === 'large',
      'tile--xl': type === 'xlarge',
      'tile--no-gutter': no_gutter === 'true',

    });

    const titleClassNames = classnames({
      'title--sm': type === 'small',
      'title--lg': type === 'large' || type === 'xlarge',
    });

    const titleTwoClassNames = classnames({
      'text--light': light === 'true',
      'title--two': tile_title_two
    });

    const descClassName = classnames({
      'text--light': light === 'true',
    });

    const lgImgClassNames = classnames({
      'ibm--col-lg-8': type === 'large',
      'ibm--col-lg-16': type === 'xlarge',
      'ibm--col-sm-4 img--lg': type === 'large' || type === 'xlarge',
    });

    return (
      <div className={classNames} style={{backgroundColor: background}}>
        { type === "small" ? (
          <div className='img--sm'>
            {children}
          </div>
        ) : null}
        <section className='tile--text-container ibm--col-sm-4'>
          <h1 className={titleClassNames}>{tile_title_one}</h1>
          {tile_title_two ? (
            <h1 className={titleTwoClassNames}>{tile_title_two}</h1>
          ) : null}
          <p className={descClassName}>{description}</p>
          {!link_two && link_one ?
            (
              <div className='arrow--link-container'>
                <Link href={href_one}>{link_one}</Link>
                <ArrowRight16/>
              </div>
            ) : null}
            {link_two ?
              (
                <div className='multi-link-container'>
                  <Link className='multi-link' href={href_one}>{link_one}</Link>
                  <br/>
                  <Link className='multi-link' href={href_two}>{link_two}</Link>
                  <br/>
                  <Link className='multi-link' href={href_three}>{link_three}</Link>
                </div>
              ) : null}
          {button === 'true' ? (
            <Button className='tile--button'>
              <span>Start Using</span>
              <Launch20/>
            </Button>
          ) : null}
        </section>
        { type !== "small" ? (
          <div className={lgImgClassNames}>
            {children}
          </div>
        ) : null}
      </div>
    );
  }
}

Tile.defaultProps = {
  type: 'small',
  no_gutter: 'false',
  button: 'false',
  light: 'false',
}
