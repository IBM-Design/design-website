import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ClickableTile } from 'carbon-components-react';
import { ArrowRight16, ArrowUpRight20 } from '@carbon/icons-react';

export default class Tile extends React.Component {
  static propTypes = {
    /**
   * for tile images
   */
    children: PropTypes.node,
    /**
   * accepts sm, md, lg, xl, correlating to how many grid columns the tile is taking up (4, 8, 12, 16)
   * default is size="4"
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
    tile_name: PropTypes.string,
    /**
   * href for the clickable tile
   */
    tile_href: PropTypes.string,
    /**
   * if true, makes tile dark. default=false
   */
    tile_dark: PropTypes.string,
    /**
   * optional secondary text for tile
   */
    tile_optional: PropTypes.string,
    /**
   * accepts ArrowUpRight16, ArrowUpRight20
   * changes icon of clickable tile, default = ArrowUpRight20
   */
    tile_icon: PropTypes.string,

  };

  render() {
    const {
      children,
      size,
      title_one,
      title_two,
      description,
      background,
      light,
      tile_name,
      tile_href,
      tile_dark,
      tile_optional,
      tile_icon
    } = this.props;

    const classNames = classnames({
      'tile--sm': size === 'sm',
      'ibm--row tile--md': size === 'md',
      'tile--lg': size === 'lg',
      'tile--xl': size === 'xl',
    });

    const titleClassNames = classnames({
      'title--main': size === 'xl' || size === 'md',
      'text--light': light === 'true',
    });

    const titleTwoClassNames = classnames({
      'title--secondary': title_two,
      'text--light': light === 'true',
    });

    const descClassName = classnames({
      'text--light': light === 'true',
    });

    const imgClassNames = classnames({
      'ibm--col-lg-8': size === 'xl',
      'ibm--col-lg-8 img--md': size === 'md',
      'img--lg': size === 'lg' || size === 'xl',
    });

    const clickTileClassNames = classnames({
      'tile--dark': tile_dark === 'true',
      'tile--optional' : tile_optional,
    });

    const tileId = (size === "xl") ? (title_one.toLowerCase().split(" ").join("-").toString()) : null;

    return (
      <div className={classNames} style={{backgroundColor: background}} id={tileId}>
        { size === "sm" ? (
          <div className='img--sm'>
            {children}
          </div>
        ) : null}
        { title_one && size !== "md" ? (
          <section className='tile--text-container ibm--col-lg-4'>
            <h1 className={titleClassNames}>{title_one}</h1>
            {title_two ? (
              <h1 className={titleTwoClassNames}>{title_two}</h1>
            ) : null}
            <p className={descClassName}>{description}</p>
          </section>
        ): null}
        { size !== "sm" ? (
          <div className={imgClassNames}>
            {children}
          </div>
        ) : null}
        { size === "md" ? (
          <div className='ibm--col-lg-8 tile--md_text-container'>
            <h1 className='title--main_md'>{title_one}</h1>
            <ClickableTile
                target="_blank"
                rel="noopener noreferrer"
                href={tile_href}
                className={clickTileClassNames}>
                <div className="tile__info">
                  <h5>{tile_name}</h5>
                </div>
                <div className="tile__link-icon">
                  { tile_icon === "ArrowUpRight20" ? (
                    <ArrowUpRight20 className= "tile--arrow-upright" aria-label="Open resource"/>
                  ) : (
                    <ArrowRight16 aria-label="Open resource"/>
                  )}
                </div>
              </ClickableTile>
          </div>
        ) : null}
        { size !== "md" ? (
          <ClickableTile
              target="_blank"
              rel="noopener noreferrer"
              href={tile_href}
              className={clickTileClassNames}>
              <div className="tile__info">
                {tile_optional ? (
                  <p>{tile_optional}</p>
                ) : null}
                <h5>{tile_name}</h5>
              </div>
              <div className="tile__link-icon">
                { tile_icon === "ArrowUpRight20" ? (
                  <ArrowUpRight20 className= "tile--arrow-upright" aria-label="Open resource"/>
                ) : (
                  <ArrowRight16 aria-label="Open resource"/>
                )}
              </div>
            </ClickableTile>
        ): null}
      </div>
    );
  }
}

Tile.defaultProps = {
  size: 'sm',
  light: 'false',
  tile_name: 'Learn more',
  tile_dark: 'false',
  tile_icon: 'ArrowUpRight20'
}
