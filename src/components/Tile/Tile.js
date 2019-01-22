import React from 'react';
import { Link } from 'gatsby';
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
     * tile title
     */
    title: PropTypes.string,

    /**
     * optional secondary text for tile
     */
    caption: PropTypes.string,

    /**
     * href for external links
     */
    href: PropTypes.string,

    /**
     * link to internal pages
     */
    link: PropTypes.string,

    /**
     * default to false, show dark clickable tile
     */
    dark: PropTypes.string,

    /**
     * default to false, display as feature tile, with text options
     */
    feature: PropTypes.string,

    /**
     * feature heading, only displas if feature is true
     */
    feature_heading: PropTypes.string,
  };

  render() {
    const {
      children,
      caption,
      title,
      href,
      link,
      dark,
      feature,
      feature_heading,
      feature_background,
    } = this.props;

    const classNames = classnames({
      tile: true,
      'tile--dark': dark === 'true',
      'tile--feature': feature === 'true',
    });

    const backgroundClassnames = classnames({
      'tile__feature-content': true,
      'background--black': feature_background === 'black',
      'background--white': feature_background === 'white',
      'background--gray-10': feature_background === 'gray-10',
      'background--gray-20': feature_background === 'gray-20',
      'background--gray-80': feature_background === 'gray-80',
      'background--gray-100': feature_background === 'gray-100',
    });

    const clickTileClassNames = classnames({
      'bx--tile--clickable--dark': dark === 'true',
    });

    const clickableTile = (
      <ClickableTile
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        className={clickTileClassNames}>
        <div className="bx--aspect-ratio bx--aspect-ratio--2x1">
          <div className="bx--aspect-ratio--object">
            <h3 className="tile__title">{title}</h3>
            {caption ? <p className="tile__caption">{caption}</p> : null}
            <div className="tile__link-icon">
              {href.startsWith('/') ? (
                <ArrowRight16 aria-label={`Open ${title}`} />
              ) : (
                <ArrowUpRight20 aria-label={`Open ${title}`} />
              )}
            </div>
          </div>
        </div>
      </ClickableTile>
    );

    if (feature === 'true') {
      return (
        <Fade bottom distance="10%">
          <div className={classNames}>
            <div className={backgroundClassnames}>
              <h2 className="bx--type-expressive-paragraph-01">
                {feature_heading}
              </h2>
              {clickableTile}
            </div>
            <div className="tile__feature-img">{children}</div>
          </div>
        </Fade>
      );
    }

    return (
      <Fade bottom distance="10%">
        <div className={classNames}>
          <div className="tile__img">{children}</div>
          {clickableTile}
        </div>
      </Fade>
    );
  }
}

Tile.defaultProps = {
  title: '',
  dark: 'false',
  feature: 'false',
  href: '',
};
