import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ClickableTile } from 'carbon-components-react';
import { ArrowRight16, ArrowUpRight20 } from '@carbon/icons-react';
import Fade from 'react-reveal/Fade';

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
     * header text color for md/xl tiles
     */
    title_color: PropTypes.string,
    /**
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

  colorContrast = ColorHEX => {
    if (ColorHEX.charAt(0) === '#') {
      const ConvertedHEX = color(ColorHEX);
      return ConvertedHEX.luminosity() > 0.44
        ? 'color-card__button--dark'
        : 'color-card__button--light';
    }
    return 'color-card__button--dark';
  };

  render() {
    const {
      children,
      size,
      title_color,
      title,
      title_secondary,
      description,
      background,
      light,
      name,
      href,
      dark,
      caption,
      icon,
    } = this.props;

    const classNames = classnames({
      'tile--xs': size === 'xs',
      'tile--sm': size === 'sm',
      'tile--md': size === 'md',
      'tile--lg': size === 'lg',
      'tile--xl': size === 'xl',
      'tile--bleed': (size === 'xl') | (size === 'md'),
      'tile--dark': dark === 'true',
      'tile--light': light === 'true',
    });

    const titleClassNames = classnames({
      tile__title: size === 'xl' || size === 'md',
      'bx--type-expressive-heading-04': true,
      'tile__text--dark': title_color === 'dark',
    });

    const titleTwoClassNames = classnames({
      'tile__title--secondary': title_secondary,
      'bx--type-expressive-heading-04': true,
      'tile__text--dark': title_color === 'dark',
    });

    const descClassName = classnames({
      tile__description: true,
      'tile__text--dark': title_color === 'dark',
    });

    const clickTileClassNames = classnames({
      'bx--tile--clickable--dark': dark === 'true',
    });

    const tileId = title
      .toLowerCase()
      .split(' ')
      .join('-')
      .toString();

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
              {icon === 'ArrowUpRight20' ? (
                <ArrowUpRight20
                  className="tile--arrow-upright"
                  aria-label="Open resource"
                />
              ) : (
                <ArrowRight16 aria-label="Open resource" />
              )}
            </div>
          </div>
        </div>
      </ClickableTile>
    );

    if (size === 'md') {
      return (
        <div
          className={classNames}
          style={{ backgroundColor: background }}
          id={tileId}>
          <div className="ibm--grid">
            <div className="ibm--row">
              <div className="tile__img">{children}</div>
              <div className="tile__text-container">
                <h2 className={titleClassNames}>{title}</h2>
              </div>
              {clickableTile}
            </div>
          </div>
        </div>
      );
    }

    if (size === 'lg') {
      return (
        <Fade bottom distance="10%">
          <div
            className={classNames}
            style={{ backgroundColor: background }}
            id={tileId}>
            <div className="ibm--grid">
              <div className="ibm--row">
                <section className="tile__text-container ibm--col-lg-4">
                  <h2 className={titleClassNames}>{title}</h2>
                  {title_secondary ? (
                    <h2 className={titleTwoClassNames}>{title_secondary}</h2>
                  ) : null}
                  {description ? (
                    <p className={descClassName}>{description}</p>
                  ) : null}
                </section>
                <div className="tile__img">{children}</div>
                {clickableTile}
              </div>
            </div>
          </div>
        </Fade>
      );
    }

    if (size === 'xl') {
      return (
        <div
          className={classNames}
          style={{ backgroundColor: background }}
          id={tileId}>
          <div className="ibm--grid">
            <div className="ibm--row">
              <section className="tile__text-container ibm--col-lg-4 ibm--offset-lg-1">
                <h2 className={titleClassNames}>{title}</h2>
                {title_secondary ? (
                  <h2 className={titleTwoClassNames}>{title_secondary}</h2>
                ) : null}
                {description ? (
                  <p className={descClassName}>{description}</p>
                ) : null}
              </section>
              <div className="tile__img ibm--offset-lg-3 ibm--col-lg-8">
                {children}
              </div>
              {clickableTile}
            </div>
          </div>
        </div>
      );
    }

    if (size === 'xs') {
      return (
        <Fade bottom distance="10%">
          <div className={classNames} style={{ backgroundColor: background }}>
            <div>{children}</div>
            {clickableTile}
          </div>
        </Fade>
      );
    }

    // Small tile is the default if no size is added
    else {
      return (
        <Fade bottom distance="10%">
          <div className={classNames} style={{ backgroundColor: background }}>
            <div>{children}</div>
            {clickableTile}
          </div>
        </Fade>
      );
    }
  }
}

Tile.defaultProps = {
  size: 'sm',
  light: 'false',
  name: 'Learn more',
  dark: 'false',
  icon: 'ArrowUpRight20',
  title: '',
};
