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
   * default is size="sm"
   */
    size: PropTypes.string,
    /**
   * only header for small tiles, first header for lg/xl tiles
   */
    title: PropTypes.string,
    /**
   * second header for lg/xl tiles
   */
    title_secondary: PropTypes.string,
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
    name: PropTypes.string,
    /**
   * href for the clickable tile
   */
    href: PropTypes.string,
    /**
   * if true, makes tile dark. default=false
   */
    dark: PropTypes.string,
    /**
   * optional secondary text for tile
   */
    caption: PropTypes.string,
    /**
   * accepts ArrowUpRight16, ArrowUpRight20
   * changes icon of clickable tile, default = ArrowUpRight20
   */
    icon: PropTypes.string,

  };

  render() {
    const {
      children,
      size,
      title,
      title_secondary,
      description,
      background,
      light,
      name,
      href,
      dark,
      caption,
      icon
    } = this.props;

    const classNames = classnames({
      'tile--sm': size === 'sm',
      'tile--md': size === 'md',
      'tile--lg': size === 'lg',
      'tile--xl': size === 'xl',
      'tile--bleed': size === 'xl' | size === 'md',
      'tile--dark': dark === 'true',
      'tile--light': light === 'true'
    });

    const titleClassNames = classnames({
      'tile__title': size === 'xl' || size === 'md',
      'text--light': light === 'true',
      'bx--type-expressive-heading-04': true,
    });

    const titleTwoClassNames = classnames({
      'tile__title--secondary': title_secondary,
      'text--light': light === 'true',
      'bx--type-expressive-heading-04': true,
    });

    const descClassName = classnames({
      'text--light': light === 'true',
      'tile__description': true
    });

    const clickTileClassNames = classnames({
      'tile--dark': dark === 'true',
    });

    
    //const tileId = title.toLowerCase().split(" ").join("-").toString();

    const clickableTile = (
      
      <ClickableTile
          target="_blank"
          rel="noopener noreferrer"
          href={href}
          className={clickTileClassNames}>
          <div className="bx--aspect-ratio bx--aspect-ratio--2x1">
            <div className="bx--aspect-ratio--object">
              <div className="tile__info">
                <h3 className="page-h3 tile__name">{name}</h3>
                {caption ? (
                  <p className="page-p--sm tile__caption">{caption}</p>
                ) : null}
              </div>
              <div className="tile__link-icon">
                { icon === "ArrowUpRight20" ? (
                  <ArrowUpRight20 className= "tile--arrow-upright" aria-label="Open resource"/>
                ) : (
                  <ArrowRight16 aria-label="Open resource"/>
                )}
              </div>
              </div>
        </div>
      </ClickableTile>

    );
    
    if (size === 'md') {
      return (
        <div className={classNames} style={{backgroundColor: background}}>
          <div className="ibm--grid">
            <div className="ibm--row">
              <div className="tile__img">
                {children}
              </div>
              <div className='tile__text-container'>
                <h2 className='tile__title bx--type-expressive-heading-04'>{title}</h2>
              </div>
              {clickableTile}
            </div>
          </div>
        </div>
      );
    } 
    
    if (size === 'lg') {
      return (
        <div className={classNames} style={{backgroundColor: background}}>    
          <div className="ibm--grid">
            <div className="ibm--row"> 
              <section className='tile__text-container ibm--col-lg-4'>
                { title  ? (
                  <h2 className={titleClassNames}>{title}</h2> 
                  ): null}
                {title_secondary ? (
                  <h2 className={titleTwoClassNames}>{title_secondary}</h2>
                ) : null}
                { description  ? (
                  <p className={descClassName}>{description}</p>
                ) : null}
              </section>
              <div className="tile__img">
                {children}
              </div>
              {clickableTile}
            </div>
          </div>
        </div>
      );
    } 

    if (size === 'xl') {
      return (
        <div className={classNames} style={{backgroundColor: background}}>    
          <div className="ibm--grid">
            <div className="ibm--row"> 
              <section className='tile__text-container ibm--col-lg-4 ibm--offset-lg-1'>
                { title  ? (
                  <h2 className={titleClassNames}>{title}</h2> 
                  ): null}
                {title_secondary ? (
                  <h2 className={titleTwoClassNames}>{title_secondary}</h2>
                ) : null}
                { description  ? (
                  <p className={descClassName}>{description}</p>
                ) : null}
              </section>
              <div className="tile__img  ibm--offset-lg-3 ibm--col-lg-8">
                {children}
              </div>
              {clickableTile}
            </div>
          </div>
        </div>
      );
    } 

    // Small tile is the default if no size is added
    else {
      return (
        <div className={classNames} style={{backgroundColor: background}}>
            <div>{children}</div>
            {clickableTile}
        </div>
      );
    }
  }
}

Tile.defaultProps = {
  size: 'sm',
  light: 'false',
  name: 'Learn more',
  dark: 'false',
  icon: 'ArrowUpRight20'
}
